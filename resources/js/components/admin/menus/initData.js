const initData = {
    items: {
        "item-1": {
            id: "item-1",
            content: { name: "Startsida", id: 1 },
            children: [],
        },
        "item-2": {
            id: "item-2",
            content: { name: "Om oss", id: 2 },
            children: [
                {
                    id: "item-3",
                    content: { name: "Historia", id: 3 },
                    children: [],
                },
                {
                    id: "item-4",
                    content: { name: "Säpo", id: 4 },
                    children: [],
                },
            ],
        },
        "item-5": {
            id: "item-5",
            content: { name: "Kontakt", id: 5 },
            children: [],
        },
    },
    columns: {
        "column-1": {
            id: "column-1",
            title: "Tillgängliga sidor",
            itemIds: ["item-1", "item-5"],
        },
        "column-2": {
            id: "column-2",
            title: "Menystruktur",
            itemIds: ["item-2"],
        },
    },
    columnOrder: ["column-1", "column-2"],
};

export default initData;
