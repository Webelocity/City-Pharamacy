import React, {useState} from 'react';
import {Checkbox, IconButton, InputAdornment, InputBase, Rating} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const Reply = ({reply, handleLike, handleDislike, commentIndex, index}) => {
    return (
        <div className='reply-wrapper'>
            <div className='name-section'>
                <img src={reply.photo} alt={reply.name}/>
                <div className='name-rating'>
                    <div className='name-time'>
                        <p>{reply.name}</p>
                        <p className='time'>{reply.commented_since}</p>
                    </div>
                    <Rating/>
                </div>
            </div>
            <p>
                {reply.comment}
            </p>
            <div className='likes-dislikes-section'>
                {/*<button>Reply</button>*/}
                <div>
                    <Checkbox
                        onChange={(event) => handleLike(event, commentIndex, index)}
                        icon={<ThumbUpOffAltIcon/>}
                        checkedIcon={<ThumbUpIcon color="success"/>}
                    />
                    {reply.likes}
                </div>
                <div>
                    <Checkbox
                        onChange={(event) => handleDislike(event, commentIndex, index)}
                        icon={<ThumbDownOffAltIcon/>}
                        checkedIcon={<ThumbDownIcon color="success"/>}
                    />
                    {reply.dislikes}
                </div>
            </div>
        </div>
    );
};

export default Reply;