import React from "react";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";
import { auth } from "../../firebase";
import { useFetch } from "../customhooks/useFetch";
import { useAuthState } from "react-firebase-hooks/auth";

export const Comment = (game) => {
  const [user] = useAuthState(auth);

  const gameId = game.gameId;

  let { data } = useFetch(
    `https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/comment/${gameId}/.json`
  );

  if(data){
    data.map((comment => {
      if(!comment.replies){
        comment.replies = [];
      }
    }))
  }

  return (
    user && (
      <CommentSection
        currentUser={{
          currentUserId: user.uid,
          currentUserImg: user.photoURL,
          currentUserFullName: user.displayName,
        }}
        logIn={{
          loginLink: "/login",
          signupLink: "/register",
        }}
        commentData={data}
        onSubmitAction={(data: {
          userId: string,
          comId: string,
          avatarUrl: string,
          userProfile?: string,
          fullName: string,
          text: string,
          replies: any,
          commentId: string,
        }) => console.log("pushed")}
        currentData={(data: any) => {
          fetch(
            `https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/comment/${gameId}/.json`,
            {
              method: "PUT",
              body: JSON.stringify(data),
            }
          );
        }}
      />
    )
  );
};
