import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import firebase from "../app/firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [user, loading, error] = useAuthState(firebase.auth());
  return (
   <div>Hello! Goodbye!</div>
  )
}
