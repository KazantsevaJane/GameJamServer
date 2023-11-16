export class CreateGameDto{
    readonly teamId: number
    readonly name: string
    readonly semesterId: number
    readonly category: number
    readonly theme: number
    readonly rating: number
    readonly status: number
    readonly shortDescription: string
    readonly playDescription: string
    readonly gitHubLink: string

}