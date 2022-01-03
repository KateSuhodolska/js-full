const withdraw = (clients, balances, client, amount) => {
    let index;
    for (let i = 0; i < clients.length; i++) {
        if (clients[i] === client) index = i;
    }
    if (amount > balances[index]) return -1;
    return (balances[index] -= amount);
};