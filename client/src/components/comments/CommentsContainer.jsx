import React, { useEffect } from "react";
import { CommentForm } from "./CommentForm";
import { getCommentsData } from "../../data/comments";
import { useState } from "react";
import { Comment } from "./Comment";

export const CommentsContainer = ({ className, loggedUserId }) => {
  const [comments, setComments] = useState([]);
  const mainComments = comments.filter((comment) => comment.parent === null);
  //check the affected comment for replying and editing
  //by defaut i'll set it to null but when editing or replying
  //ill pass an object to it
  const [affectedComment, setAffectedComment] = useState(null);
  console.log(comments);
  useEffect(() => {
    /*const getComment = async () => {
        getComment();
    } is the same like my function call below*/
    (async () => {
      const commentData = await getCommentsData();
      setComments(commentData);
    })();
  }, []);

  /**
   * add comment function
   *
   * @param {*} value
   * @param {*} [parentId=null]
   * @param {*} [replyOnuser=null]
   */
  const addCommentHandler = (value, parentId = null, replyOnuser = null) => {
    //schema of new comments
    const newComment = {
      _id: Math.random().toString(),
      user: {
        _id: "a",
        name: "Mohamed Yansane",
      },
      desc: value,
      post: "1",
      parent: parentId,
      replyOnUser: replyOnuser,
      createdAt: new Date().toISOString(),
    };

    setComments((prevState) => [newComment, ...prevState]);
    // set it to null so our form will disappear after editing
    setAffectedComment(null);
  };

  /**
   *
   * update comment function
   * @param {*} value
   * @param {*} commentId
   */
  const updatedCommentHandler = (value, commentId) => {
    const updated = comments.map((c) => {
      if (c._id === commentId) {
        return { ...c, desc: value };
      }
      return c;
    });
    setComments(updated);
    // set it to null so our form will disappear after editing
    setAffectedComment(null);
  };
  /**
   * delete comment function
   *
   * @param {*} commentId
   */
  const deleteCommentHandler = (commentId) => {
    const findComment = comments.find((c) => c._id === commentId);
    if (!findComment) {
      console.log("comment does not exist");
    }
    const deleteComment = comments.filter((c) => c._id !== commentId);
    setComments(deleteComment);
  };

  /**
   *
   * get the replies comment
   * after getting the comment i'll sort it base on the date
   * @param {*} commentId main comment id
   * @return {*}
   * getTime is the millisec
   * return new Date(a.createdAt).getTime() - b.createdAt.getTime()
   * if the result is negative it means a is smaller than b
   *
   * if the result is 0 it means nothing has changed the order will be the same
   *
   */
  const getRepliesComment = (commentId) => {
    return comments
      .filter((c) => c.parent === commentId)
      .sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
  };
  return (
    <div className={` ${className}`}>
      <CommentForm
        btnLabel="Send"
        formSubmitHandler={(value) => addCommentHandler(value)}
      />
      <div className="space-y-4 mt-8">
        {mainComments &&
          mainComments.map((comment, index) => (
            <Comment
              key={index}
              comment={comment}
              loggedUserId={loggedUserId}
              affectedComment={affectedComment}
              setAffectedComment={setAffectedComment}
              addComment={addCommentHandler}
              updateComment={updatedCommentHandler}
              deleteComment={deleteCommentHandler}
              replies={getRepliesComment(comment._id)}
            />
          ))}
      </div>
    </div>
  );
};
