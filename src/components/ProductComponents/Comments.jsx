import React from 'react';
import './Comments.scss'
import {Checkbox, Divider, Rating, useMediaQuery} from "@mui/material";
import photo from '../../assets/product-comment.svg'
import photo2 from '../../assets/everyday-turmeric.svg'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const comments = [
    {
        name: "Sherrie B",
        photo: photo,
        commented_since: "Yesterday",
        comment: "Good product.",
        likes: 5,
        dislikes: 0,
        replies: []
    },
    {
        name: "Sherrie B",
        photo: photo,
        commented_since: "Yesterday",
        comment: "This is the best pharmacy.  I have been coming for years, and it's great to be dealing with the same people.  My prescriptions are filled in a timely manner, and they return phone messages quickly.  I also got my last Covid vaccination with them and had an appointment within a day.",
        likes: 5,
        dislikes: 0,
        replies: [
            {
                name: "Bella",
                photo: photo,
                commented_since: "2 weeks ago",
                comment: "Is it suitable for dry skins?",
                likes: 5,
                dislikes: 0
            }

        ]
    },
    {
        name: "Sherrie B",
        photo: photo,
        commented_since: "Yesterday",
        comment: "Good product.",
        likes: 5,
        dislikes: 0,
        replies: []
    },
]

const Comments = () => {
    const matches = useMediaQuery('(max-width:1200px)')
    return (
        <div className='comments-wrapper'>
            {comments.map(comment =>
                <div className='comment-section'>
                    <div className='name-section'>
                        <img src={comment.photo} alt={comment.name}/>
                        <div className='name-rating'>
                            <div className='name-time'>
                                <p>{comment.name}</p>
                                <p className='time'>{comment.commented_since}</p>
                            </div>
                            <Rating/>
                        </div>
                    </div>
                    <p>
                        {comment.comment}
                    </p>
                    <div className='likes-dislikes-section'>
                        <button>Reply</button>
                        <div>
                            <Checkbox
                                icon={<ThumbUpOffAltIcon/>}
                                checkedIcon={<ThumbUpIcon color="success"/>}
                            />
                            {comment.likes}
                        </div>
                        <div>
                            <Checkbox
                                icon={<ThumbDownOffAltIcon/>}
                                checkedIcon={<ThumbDownIcon color="success"/>}
                            />
                            {comment.dislikes}
                        </div>
                    </div>
                    {comment.replies.map(reply =>
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
                                <button>Reply</button>
                                <div>
                                    <Checkbox
                                        icon={<ThumbUpOffAltIcon/>}
                                        checkedIcon={<ThumbUpIcon color="success"/>}
                                    />
                                    {reply.likes}
                                </div>
                                <div>
                                    <Checkbox
                                        icon={<ThumbDownOffAltIcon/>}
                                        checkedIcon={<ThumbDownIcon color="success"/>}
                                    />
                                    {reply.dislikes}
                                </div>
                            </div>
                        </div>
                    )}
                    <Divider sx={{width: "100%"}}/>
                </div>
            )}
            <div className='write-comment-wrapper'>
                <h1>WRITE A COMMENT</h1>
                <div className='first-name'>
                    <input placeholder="Full Name*"/>
                    <input placeholder="Email Address*"/>
                </div>
                <textarea rows="5" cols="60" name="description" placeholder='Message*'>
                </textarea>
            </div>
            {matches &&
                <div className='special-offers'>
                    <p>Special Offers</p>
                    <div className='new-arrivals'>
                        <div className='up-top'>
                            <p>Up To 50%</p>
                        </div>
                        <img src={photo2} alt='product'/>
                        <div className='text'>
                            <p>New Arrivals</p>
                            <p className='description'>Find your medicine</p>
                        </div>
                        <button>Explore Now</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Comments;