export interface Pokemon {
    id: number,
    pic: string,
    name: string,
    type: string,
    abilities: string,
    base_hp: number,
    base_att: number,
    base_def: number,
    base_satt: number,
    base_sdef: number,
    base_spd: number,
    rarity: number,
    evolution: number,
    shiny?: boolean
}