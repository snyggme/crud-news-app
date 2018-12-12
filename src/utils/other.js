export const isNewsIdValid = (id, feeds) => {
    for(let i = 0; i < feeds.length; i++) {
        if (feeds[i]._id === id)
            return true
    }

    return false;
}