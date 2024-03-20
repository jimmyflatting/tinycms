import React from "react";

const TextBlock = ({ content, block_id }) => {
    return (
        <div>
            <label htmlFor={block_id}></label>
            <input name={block_id} type="text" placeholder={content} />
        </div>
    );
};

export default TextBlock;
