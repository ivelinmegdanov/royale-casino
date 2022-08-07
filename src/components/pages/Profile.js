import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useEffect } from "react";

export const Profile = () => {
    const [user, loading] = useAuthState(auth);
    const { userId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
          // loading screen
          return;
        }
        if(userId !== user.uid) navigate("/");
        if (!user) navigate("/login");
      }, [user, loading]);

    return(
        <motion.div  intial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <h1>Test</h1>
        </motion.div>
    );
};