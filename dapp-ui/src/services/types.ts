interface Callback {
    send: (data: any) => Promise<null>;
}
interface Variable {
    call: () => number;
}
interface Teams {
    call: () => {name: string}
}

interface RillContract {
    teamId: () => Variable,
    teams: (index: number) => Teams,
    createTournament: (
        tournamentType: number,
        name: string,
        _teamIds: number[],
        players: string[],
        fee: number,
        prize: number[],
        badges: number[],
    ) => Callback;
    registerForTournament: (
        _tournamentId: number,
        _teamId: number
    ) => Callback;
    endTournament: (
        _tournamentId: number,
        winners: string[]
    ) => Callback;
    createTeam: (
        name: string,
        logo: string,
        players: string[]
    ) => Callback;
    assignPlayersToTeam: (
        _teamId: number,
        _players: string[]
    ) => Callback;
    placeBounty: (
        _tournamentId: number,
        _player: string,
        _amount: string
    ) => Callback;
    collectBounty: (
        _bountyId: number,
        _collector: string
    ) => Callback;
}
