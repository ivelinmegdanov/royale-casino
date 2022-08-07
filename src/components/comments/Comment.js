import React from "react";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";
import { auth } from "../../firebase";
import { useFetch } from "../customhooks/useFetch";
import { useAuthState } from "react-firebase-hooks/auth";

export const Comment = (game) => {
  const [user] = useAuthState(auth);

  const gameId = game.gameId;

  const { data } = useFetch(
    `https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/comment/${gameId}/.json`
  );

  console.log(data);

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
        }) => console.log("push data", data)}
        currentData={(data: any) => {
          console.log("cqla", data);
          if (data.replies) {
            fetch(
              `https://royale-casino-default-rtdb.europe-west1.firebasedatabase.app/comment/${gameId}/.json`,
              {
                method: "PUT",
                body: JSON.stringify(data),
              }
            );
          }
        }}
      />
    )
  );
};
