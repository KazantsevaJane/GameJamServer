export class CreateGameDto{
    readonly teamId: string
    readonly name: string
    readonly semesterId: string
    readonly categoryId: string
    readonly theme: string
    readonly rating: number
    readonly statusId: string
    readonly shortDescription: string
    readonly playDescription: string
    readonly gitHubLink: string
    readonly command: string[]
}