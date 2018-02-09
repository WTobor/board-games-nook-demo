export class BoardGame {
    Id: number;
    Name: string;
    Description: string;
    MinPlayers: number;
    MaxPlayers: number;
    MinAge: number;
    MinTime: number;
    MaxTime: number;
    BGGUrl: string;
    IsExpansion: boolean;
    ParentId: number | null;
    ParentBoardGame: BoardGame | null;
    ImageUrl: string;
}
