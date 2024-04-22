import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import initData from "./initData";

export default function MenuTable() {
    // let state = initData;
    const [state, setState] = React.useState(initData);

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (result.combine) {
            console.log(result.combine);
            const {
                draggableId: combinedId,
                droppableId: combinedDroppableId,
            } = result.combine;
            const combinedItem = state.items[combinedId];
            const droppedItem = state.items[draggableId];

            const updatedItems = state.items.map((item) => {
                if (item.id === combinedItem.id) {
                    return {
                        ...item,
                        children: [...item.children, droppedItem],
                    };
                }
                return item;
            });

            setState((prevState) => ({
                ...prevState,
                items: updatedItems,
            }));
            return;
        }

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        // If the item is dropped in the same column
        if (destination.droppableId === source.droppableId) {
            const column = state.columns[source.droppableId];
            const newItems = [...column.itemIds];
            newItems.splice(source.index, 1);
            newItems.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...column,
                itemIds: newItems,
            };

            const newState = {
                ...state,
                columns: {
                    ...state.columns,
                    [newColumn.id]: newColumn,
                },
            };

            setState(newState);
            return;
        }

        // If the item is dropped in a different column
        const start = state.columns[source.droppableId];
        const finish = state.columns[destination.droppableId];

        if (start === finish) {
            const newItems = [...start.itemIds];
            newItems.splice(source.index, 1);
            newItems.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                itemIds: newItems,
            };

            const newState = {
                ...state,
                columns: {
                    ...state.columns,
                    [newColumn.id]: newColumn,
                },
            };

            setState(newState);
            return;
        }

        // Moving from one list to another
        const startItems = [...start.itemIds];
        startItems.splice(source.index, 1);
        const newStart = {
            ...start,
            itemIds: startItems,
        };

        const finishItems = [...finish.itemIds];
        finishItems.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            itemIds: finishItems,
        };

        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };

        setState(newState);

        const items = [...state.items];
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setState({ items });
    };

    console.log(state);

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex flex-row">
                    {state.columnOrder.map((columnId) => {
                        const column = state.columns[columnId];
                        const items = column.itemIds.map(
                            (itemId) => state.items[itemId]
                        );

                        return (
                            <Column
                                key={column.id}
                                column={column}
                                items={items}
                            />
                        );
                    })}
                </div>
            </DragDropContext>
            <PreviewMenu state={state} />
        </>
    );
}

function Column({ column, items }) {
    return (
        <div className="flex flex-col w-full p-2">
            <h2 className="text-lg font-bold underline mb-2">{column.title}</h2>
            <Droppable droppableId={column.id} isCombineEnabled>
                {(provided, snapshot) => (
                    <div
                        className={`p-2 border rounded-md transition-all ${
                            snapshot.isDraggingOver ? "bg-gray-100" : "bg-white"
                        }`}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {items.map((item, index) => (
                            <React.Fragment key={item.id}>
                                <Item item={item} index={index} />
                                {item.children.length > 0 &&
                                    item.children.map((child, index) => (
                                        <Item
                                            index={index}
                                            key={child.id}
                                            item={child}
                                            className="ms-10"
                                        />
                                    ))}
                            </React.Fragment>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}

function Item({ item, className = "", index }) {
    return (
        <Draggable draggableId={item.id} index={index}>
            {(provided, snapshot) => (
                <div
                    className={`p-2 border rounded-md mb-2 last:mb-0 bg-white ${className} ${
                        snapshot.isDragging ? " shadow-xl" : ""
                    }`}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {index + 1}
                    {" - "}
                    {item.content.name}
                </div>
            )}
        </Draggable>
    );
}

function PreviewMenu(state) {
    console.log(state);
    return (
        <div className="mt-10">
            <h2 className="text-lg font-bold underline mb-2">
                Förhandsvisning
            </h2>
            <div className="p-2 border rounded-md">Test</div>
        </div>
    );
}
