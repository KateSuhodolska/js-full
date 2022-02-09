export function withdraw(clients, balances, client, amount) {
    const i = clients.indexOf(client);
    if (balances[i] < amount) {
        return -1;
    }
    balances[i] -= amount;
    return balances[i];
}