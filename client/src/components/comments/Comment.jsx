import React from "react";
import images from "./../../assets/images/Images";
import { BiMessageRounded, BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { CommentForm } from "./CommentForm";
export const Comment = ({
  comment,
  loggedUserId,
  affectedComment,
  setAffectedComment,
  addComment,
  updateComment,
  deleteComment,
  replies,
  parentId = null,
}) => {
  // i created isUserLoggedIn cause i want to render
  // my actions reply edit and delete action
  // isUserLoggedIn must have only a reply action
  const isUserLoggedIn = Boolean(loggedUserId);
  // checking to who belongs the comment
  const commentBelongsTo = loggedUserId === comment.user._id;
  // mon affected comment must be true and the type replying
  const isReplying =
    affectedComment &&
    affectedComment.type === "replying" &&
    affectedComment._id === comment._id;
  const isEditing =
    affectedComment &&
    affectedComment.type === "editing" &&
    affectedComment._id === comment._id;
  const replyCommentId = parentId ? parentId : comment._id;
  const replyOnUser = comment.user._id;

  return (
    <div className="flex flex-nowrap items-start gap-x-3 rounded-lg p-3  bg-[#F2F4F5]">
      <img
        src={images.profil_pic}
        alt="user profile"
        className="w-8 h-8 object-cover rounded-full"
      />
      <div className="right flex-1 flex flex-col">
        <h5 className="font-bold text-dark-hard text-xs lg:text-sm">
          {comment.user.name}
        </h5>
        <span className="text-xs text-dark-soft">
          {new Date(comment.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
          })}
        </span>

        {/**is editing section updateComment(value, commentId) for frmHandler*/}
        {isEditing && (
          <CommentForm
            btnLabel="Update"
            formSubmitHandler={(value) => updateComment(value, comment._id)}
            formCancelHandler={() => setAffectedComment(null)}
            initialText={comment.desc}
          />
        )}
        {!isEditing && (
          <p className="mt-4 text-dark-soft text-base font-jetbrain">
            {comment.desc}
          </p>
        )}
        <div className="action flex gap-x-3 text-dark-soft text-xs my-3 items-center">
          {isUserLoggedIn && (
            <button
              className="flex gap-x-2 items-center font-jetbrain"
              onClick={() =>
                setAffectedComment({ type: "replying", _id: comment._id })
              }>
              <BiMessageRounded className="w-4 h-auto" />
              Reply
            </button>
          )}
          {commentBelongsTo && (
            <>
              <button
                className="flex gap-x-2 items-center font-jetbrain"
                onClick={() =>
                  setAffectedComment({ type: "editing", _id: comment._id })
                }>
                <BiEdit className="w-4 h-auto" />
                Edit
              </button>
              <button
                className="flex gap-x-2 items-center font-jetbrain"
                onClick={() => deleteComment(comment._id)}>
                <MdDeleteOutline className="w-4 h-auto" />
                Delete
              </button>
            </>
          )}
        </div>
        {isReplying && (
          <CommentForm
            btnLabel="Reply"
            formSubmitHandler={(value) =>
              addComment(value, replyCommentId, replyOnUser)
            }
            formCancelHandler={() => setAffectedComment(null)}
          />
        )}
        {/**  replies part */}
        {replies.length > 0 && (
          <div className="">
            {replies.map((reply) => (
              // i set replies to an empty array cause i dont want
              // things to mess up
              // reply est un array
              <Comment
                key={reply._id}
                comment={reply}
                loggedUserId={loggedUserId}
                affectedComment={affectedComment}
                setAffectedComment={setAffectedComment}
                addComment={addComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                replies={[]}
                parentId={comment._id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
