import React, {useState} from 'react';
import './Comments.scss'
import {Checkbox, Divider, Rating, useMediaQuery} from "@mui/material";
import photo from '../../assets/product-comment.svg'
import photo2 from '../../assets/everyday-turmeric.svg'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const commentsDummy = [
    {
        id: 0,
        name: "Sherrie B",
        photo: photo,
        commented_since: "Yesterday",
        comment: "Good product.",
        likes: 5,
        dislikes: 0,
        replies: []
    },
    {
        id: 1,
        name: "Sherrie B",
        photo: photo,
        commented_since: "Yesterday",
        comment: "This is the best pharmacy.  I have been coming for years, and it's great to be dealing with the same people.  My prescriptions are filled in a timely manner, and they return phone messages quickly.  I also got my last Covid vaccination with them and had an appointment within a day.",
        likes: 5,
        dislikes: 0,
        replies: [
            {
                id: 0,
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
        id: 2,
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
    const matches = useMediaQuery('(max-width:1200px)');
    const [comments, setComments] = useState(commentsDummy);
    const [comment, setComment] = useState({full_name: "", email_address: "", photo: photo, comment: ""});

    const handleChange = (event) => {
        const {value, name} = event.target;
        setComment({...comment, [name]: value})
    }

    const handleSendMessage = () => {
        const commentToAdd = {
            id: comments.length,
            name: `${comment.full_name}`,
            photo: photo,
            commented_since: `Just Now`,
            comment: comment.comment,
            likes: 0,
            dislikes: 0,
            replies: []
        }
        setComments([...comments, commentToAdd]);
        setComment({full_name: "", email_address: "", photo: photo, comment: ""})
        //TODO add comment to db
    }

    const handleLike = (event, idFromComment, idFromReply) => {
        const checked = event.target.checked;

        setComments(prevState => prevState.map(comment => {
            if (comment.id !== idFromComment) return comment;

            const updateLikes = (item) => ({
                ...item,
                likes: checked ? item.likes + 1 : item.likes - 1,
            });

            if (idFromReply || idFromReply === 0) {
                const updatedReplies = comment.replies.map(reply =>
                    (reply.id === idFromReply) ? updateLikes(reply) : reply
                );
                return { ...comment, replies: updatedReplies };
            }

            return updateLikes(comment);
        }));
    };

    const handleDislike = (event, idFromComment, idFromReply) => {
        const checked = event.target.checked;

        setComments(prevState => prevState.map(comment => {
            if (comment.id !== idFromComment) return comment;

            const updateDislikes = (item) => ({
                ...item,
                dislikes: checked ? item.dislikes + 1 : item.dislikes - 1,
            });

            if (idFromReply || idFromReply === 0) {
                const updatedReplies = comment.replies.map(reply =>
                    (reply.id === idFromReply) ? updateDislikes(reply) : reply
                );
                return { ...comment, replies: updatedReplies };
            }

            return updateDislikes(comment);
        }));
    };

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
                                onChange={(event) => handleLike(event, comment.id)}
                                icon={<ThumbUpOffAltIcon/>}
                                checkedIcon={<ThumbUpIcon color="success"/>}
                            />
                            {comment.likes}
                        </div>
                        <div>
                            <Checkbox
                                onChange={(event) => handleDislike(event, comment.id)}
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
                                {/*<button>Reply</button>*/}
                                <div>
                                    <Checkbox
                                        onChange={(event) => handleLike(event, comment.id, reply.id)}
                                        icon={<ThumbUpOffAltIcon/>}
                                        checkedIcon={<ThumbUpIcon color="success"/>}
                                    />
                                    {reply.likes}
                                </div>
                                <div>
                                    <Checkbox
                                        onChange={(event) => handleDislike(event, comment.id, reply.id)}
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
                    <input value={comment.full_name} name="full_name" onChange={handleChange} placeholder="Full Name*"/>
                    <input value={comment.email_address} name="email_address" onChange={handleChange} placeholder="Email Address*"/>
                </div>
                <textarea value={comment.email_address} name="comment" onChange={handleChange} rows="5" cols="60"
                          placeholder='Message*'>
                </textarea>
                <button onClick={handleSendMessage}>Send Message</button>
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