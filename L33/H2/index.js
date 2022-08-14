const userData = {
    days: 7,
    userId: "facebook",
    repoId: "facebook-ios-sdk",
};

const getMostActiveDevs = (obj) => {
    return fetch(
            `https://api.github.com/repos/${obj.userId}/${obj.repoId}/commits?per_page=100`
        )
        .then((response) => response.json())
        .then((commits) =>
            commits.filter(
                (el) =>
                Date.parse(moment().subtract(userData.days, "days").calendar()) <=
                Date.parse(new Date(el.commit.author.date))
            )
        )
        .then((filteredCommits) => {
            const arrOfMostActivedevs = [];

            const devsData = filteredCommits.map((com) => {
                return [com.commit.author.name, com.commit.author.email];
            });
            const devsNames = devsData
                .map((el) => el[0])
                .reduce((acc, el) => {
                    acc[el] = (acc[el] || 0) + 1;
                    return acc;
                }, {});

            const maxValue = Math.max.apply(null, Object.values(devsNames));
            const nameOfMostActiveDevs = Object.keys(devsNames).filter(
                (key) => devsNames[key] === maxValue
            );

            const emailsActiveDevs = devsData.find(
                (el) => el[0] == nameOfMostActiveDevs
            )[1];

            arrOfMostActivedevs.push({
                count: `${maxValue}`,
                name: `${nameOfMostActiveDevs}`,
                email: `${emailsActiveDevs}`,
            });

            return arrOfMostActivedevs;
        });
};

getMostActiveDevs(userData).then((repo) => console.log(repo));