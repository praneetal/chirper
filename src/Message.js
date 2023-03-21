const messages = [];

export const saveMessage = (newMessage) => {
    messages.push(newMessage);
}

export const readMessages = () => {
    return messages.sort((a, b) => {
        const DateA = new Date(a.date);
        const DateB = new Date(b.date);

        if (DateA > DateB) return -1;
        if (DateA < DateB) return 1;
        return 0;
    });
}
