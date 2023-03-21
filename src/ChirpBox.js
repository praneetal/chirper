import React, {useState} from "react"
import { Button } from "@material-ui/core"
import "./ChirpBox.css";
import { saveMessage } from "./Message.js";

function ChirpBox() {
    const [chirpMessage, setChirpMessage] = useState("");

    const sendChirp = (e) => {
        e.preventDefault();

        const newMessage = {
            chirpMessage: chirpMessage,
            date : new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
            user : 'Praneeta'
        }

        saveMessage(newMessage);

        setChirpMessage("");

    };
    return (
        <div className="ChirpBox">
            <form>
                <div className="ChirpBox-Input">
                    <input
                        onChange={(e) => setChirpMessage(e.target.value)}
                        value={chirpMessage}
                        placeholder="Share your thoughts..."
                        type="text"
                    />
                </div>
                <Button
                    onClick={sendChirp}
                    type="submit"
                    className="ChirpBox-Button"
                >
                    Chirp!
                </Button>
            </form>
        </div>
    );
}

export default ChirpBox;