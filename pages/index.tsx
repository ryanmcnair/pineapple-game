import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import firebase from "../app/firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

export default function Home() {
  const db = firebase.firestore();

  const [user, loading, error] = useAuthState(firebase.auth());
  console.log("user", user, "loading", loading);
  const [votes, votesLoading, votesError] = useCollection(
    firebase.firestore().collection("votes"),
    {}
  );

  if (!votesLoading && votes) {
    votes.docs.map((doc: { data: () => any }) => console.log(doc.data()));
  }

  const addVoteDocument = async (vote: string) => {
    await db.collection("votes").doc(user.uid).set({
      vote,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gridGap: 8,
        background:
          "linear-gradient(180deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      }}
    >
      <div style={{ flexDirection: "row", display: "flex" }}>
        <button
          style={{ fontSize: 32, marginRight: 8 }}
          onClick={() => addVoteDocument("yes")}
        >
          ✅🍍🍕
        </button>
        <button
          style={{ fontSize: 32, marginRight: 8 }}
          onClick={() => addVoteDocument("no")}
        >
          ❌🍍🍕
        </button>
      </div>
    </div>
  );
}
