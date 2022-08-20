import getWeb3 from "./getWeb3";
import RillContract from "../contracts/Rill.json";

let rillContract: {
    methods: RillContract
};
let account: any;


export async function initialize() {
    let account = null;

    try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();

        const networkId = await web3.eth.net.getId();
        // @ts-ignore
        const deployedNetwork = RillContract.networks[networkId];
        const instance = new web3.eth.Contract(
            RillContract.abi,
            deployedNetwork && deployedNetwork.address
        );

        setRillContract(instance);
        setAccount(accounts[0]);
        account = accounts[0];
    } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
            `Failed to load web3, accounts, or contract. Check console for details.`
        );
        console.error(error);
    }

    return account;
}

export async function setRillContract(contract: any) {
    rillContract = contract;
    console.log(rillContract);
}
export async function setAccount(accountId: any) {
    account = accountId;
    console.log(account);
}

export async function createTeam() {
    let name = 'nakama';
    let logo = 'https://tinyurl.com/nakamalogo';
    let players = ['0x389d212B12618dbDF4B1Ff5c4317DB5E096f954E'];

    const result = await rillContract.methods.createTeam(name, logo, players).send({
        feeLimit: 100_000_000,
        callValue: 0,
        shouldPollResponse: true,
        from: account
    });

    alert(`Team ${name} created, have fun!`)
    return result;
}

export async function fetchTeams() {
    const teams = [];

    const teamId = await rillContract.methods.teamId().call();

    console.log(teamId);

    for (let i = 0; i < teamId; i++) {
        const team = await rillContract.methods.teams(i).call();
        console.log(team);

        if (team.name != "") {
            teams.push(
                {
                    id: i,
                    name: team.name
                }
            )
        }

    }

    return teams
}

export async function assignPlayersToTeam() {
    const _teamId: number = 1;
    const _players: string[] = ['0x389d212B12618dbDF4B1Ff5c4317DB5E096f954E'];

    const result = await rillContract.methods.assignPlayersToTeam(_teamId, _players).send({});

    console.log(result);

    return result;
}

export async function placeBounty() {
    let tournamentId = 1;
    let playerAddress = '0x389d212B12618dbDF4B1Ff5c4317DB5E096f954E';
    let amount = '50000000000000000';

    const result = rillContract.methods.placeBounty(tournamentId, playerAddress, amount).send({
        value: amount,
        // shouldPollResponse: true,
        from: account
    }).then(function (receipt) {
        // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
        console.log(receipt);
        alert('Bounty placed!');
    });


    return result;
}

export async function collectBounty() {
    const bountyId = 1;
    const collector = '0x389d212B12618dbDF4B1Ff5c4317DB5E096f954E';

    const result = await rillContract.methods.collectBounty(bountyId, collector).send({
        feeLimit: 100_000_000,
        callValue: 0,
        shouldPollResponse: true,
        from: account
    });

    alert('Bounty collected!');

    return result;
}