import React, {useState} from 'react';
import './Comments.scss'
import {useMediaQuery} from "@mui/material";
import photo from '../../assets/product-comment.svg'
import photo2 from '../../assets/everyday-turmeric.svg'
import Comment from './Comment'
import {useSelector} from "react-redux";

const commentsDummy = [
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
    const matches = useMediaQuery('(max-width:1200px)');
    const [comments, setComments] = useState(commentsDummy);
    const [comment, setComment] = useState({full_name: "", email_address: "", photo: photo, comment: ""});
    const user = useSelector((state) => state.user.currentUser);

    const handleChange = (event) => {
        const {value, name} = event.target;
        setComment({...comment, [name]: value})
    }

    const handleSendMessage = () => {
        const commentToAdd = {
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

    const handleLike = (event, commentIndex, replyIndex) => {
        const checked = event.target.checked;

        setComments(prevState => prevState.map((comment, cIndex) => {
            if (cIndex !== commentIndex) return comment;

            const updateLikes = (item, rIndex) => ({
                ...item,
                likes: checked ? item.likes + 1 : item.likes - 1,
            });

            if (replyIndex || replyIndex === 0) {
                const updatedReplies = comment.replies.map((reply, rIndex) =>
                    (rIndex === replyIndex) ? updateLikes(reply, rIndex) : reply
                );
                return { ...comment, replies: updatedReplies };
            }

            return updateLikes(comment);
        }));
    };


    const handleDislike = (event, commentIndex, replyIndex) => {
        const checked = event.target.checked;

        setComments(prevState => prevState.map((comment, cIndex) => {
            if (cIndex !== commentIndex) return comment;

            const updateLikes = (item, rIndex) => ({
                ...item,
                dislikes: checked ? item.dislikes + 1 : item.dislikes - 1,
            });

            if (replyIndex || replyIndex === 0) {
                const updatedReplies = comment.replies.map((reply, rIndex) =>
                    (rIndex === replyIndex) ? updateLikes(reply, rIndex) : reply
                );
                return { ...comment, replies: updatedReplies };
            }

            return updateLikes(comment);
        }));
    };


    const handleSubmitReply = (event, commentIndex, data) => {
        event.preventDefault();

        const updatedComments = comments.map((comment, cIndex) => {
            if (cIndex === commentIndex) {
                const dataToAdd = {
                    name: user?.email,
                    photo: photo,
                    commented_since: "Just Now",
                    comment: data,
                    likes: 0,
                    dislikes: 0
                }
                return {
                    ...comment,
                    replies: [...comment.replies, dataToAdd],
                };
            }
            return comment;
        });

        setComments(updatedComments);
    };


    return (
        <div className='comments-wrapper'>
            {comments.map((comment,index) =>
                <Comment key={index} comment={comment} handleLike={handleLike} handleDislike={handleDislike}
                         handleSubmitReply={handleSubmitReply} index={index} />
            )}
            <div className='write-comment-wrapper'>
                <h1>WRITE A COMMENT</h1>
                <div className='first-name'>
                    <input value={comment.full_name} name="full_name" onChange={handleChange} placeholder="Full Name*"/>
                    <input value={comment.email_address} name="email_address" onChange={handleChange}
                           placeholder="Email Address*"/>
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