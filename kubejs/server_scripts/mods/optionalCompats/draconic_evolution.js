if (Platform.isLoaded("draconicevolution")) {
    console.log("Ayo sum guy said something is gonna explode... loading compat scripts");    

ServerEvents.recipes(event => {

    event.remove([{ mod: "draconicevolution"}, { type: "minecraft:crafting"}])
    event.remove({ type: "draconicevolution:fusion_crafting"})

    event.replaceInput(
        { input: "draconicevolution:draconium_ingot" },
        "draconicevolution:draconium_ingot",
        "gtceu:draconium_ingot"
    )
    
    event.replaceInput(
        { input: "draconicevolution:draconium_dust" },
        "draconicevolution:draconium_dust",
        "gtceu:draconium_dust"
    )

    event.replaceInput(
        { input: "draconicevolution:draconium_ingot" },
        "draconicevolution:draconium_ingot",
        "gtceu:awakened_draconium_ingot"
    )
    
    event.replaceInput(
        { input: "draconicevolution:draconium_dust" },
        "draconicevolution:draconium_dust",
        "gtceu:awakened_draconium_dust"
    )

    event.shaped(Item.of("draconicevolution:basic_crafting_injector"), [
        "DPD",
        "RYR",
        "DUD"
    ], {
        D: "gtceu:double_enderium_plate",
        P: "#gtceu:circuits/ev",
        R: "draconicevolution:draconium_core",
        U: "gtceu:clean_machine_casing"
    })

    event.recipes.gtceu.assembly_line("fusion_awakened_core")
        .itemOutputs("draconicevolution:awakened_core")
        .itemInputs("4x draconicevolution:wyvern_core", "4x gtceu:awakened_draconium_ingot", "1x kubejs:ender_star", "2x #gtceu:circuits/zpm", "1x gtceu:hssg_frame")
        .inputFluids("gtceu:awakened_draconium 1296")
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack("kubejs:ender_star").EUt(480).duration(1200))
        .duration(4800)
        .EUt(30720)
    
    event.recipes.gtceu.assembler("assembler_relay_crystal")
        .itemInputs([
            Item.of("4x nuclearcraft:hard_carbon_ingot"),
            Item.of("draconicevolution:wyvern_energy_core")
        ])
        .inputFluids("gtceu:draconium 576")
        .itemOutputs("draconicevolution:basic_relay_crystal")
        .duration(2400)
        .EUt(4500)
    
    event.recipes.gtceu.mixer("mixer_unstable_draconium")
        .inputFluids("gtceu:draconium 144", "gtceu:awakened_draconium 144")
        .outputFluids("gtceu:unstable_draconium 288")
        .duration(3500)
        .EUt(GTValues.VA[GTValues.UV])
    
//GDHSGFHSGFGHSFGSHFGSHFGSFGJ(i'm gonna go crazy :)

    event.recipes.gtceu.assembly_line("fusion_betta_relay_crystal")
        .itemOutputs("draconicevolution:draconic_relay_crystal")
        .itemInputs("1x draconicevolution:wyvern_core", "4x draconicevolution:wyvern_energy_core", "3x gtceu:diamatine_empowered_block", "1x #gtceu:circuits/luv", "1x gtceu:stainless_steel_frame")
        .inputFluids("gtceu:awakened_draconium 288")
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack("draconicevolution:basic_relay_crystal").EUt(480).duration(1200))
        .duration(4800)
        .EUt(GTValues.VA[GTValues.LuV])
    
    event.recipes.gtceu.assembly_line("assembly_draco_chest")
        .itemOutputs("draconicevolution:draconium_chest")
        .itemInputs("5x gtceu:iv_electric_furnace", "5x draconicevolution:draconium_core", "2x extendedcrafting:advanced_table", "1x gtceu:tungsten_steel_crate")
        .inputFluids("gtceu:draconium 576")
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack("gtceu:titanium_crate").EUt(480).duration(1200))
        .duration(2500)
        .EUt(GTValues.VA[GTValues.IV])
    
    event.recipes.gtceu.assembler("assmbler_awk_draconium")
        .inputFluids("gtceu:draconium 1296")
        .itemInputs("10x draconicevolution:draconium_core", "1x draconicevolution:dragon_heart")
        .itemOutputs("4x gtceu:awakened_draconium_block")
        .duration(1500)
        .EUt(GTValues.VA[GTValues.IV])
    
    event.recipes.gtceu.assembler("assembler_drag_core")
        .inputFluids("gtceu:draconium 1296")
        .itemInputs("4x gtceu:draconium_ingot", "4x gtceu:tungsten_carbide_ingot", "1x gtceu:diamatine_empowered_block")
        .itemOutputs("draconicevolution:draconium_core")
        .duration(750)
        .EUt(GTValues.VA[GTValues.HV])
    
    event.recipes.gtceu.assembler("assembler_wyv_drag_core")
        .inputFluids("gtceu:draconium 1296")
        .itemInputs("4x gtceu:draconium_ingot", "4x draconicevolution:draconium_core", "1x kubejs:ender_star")
        .itemOutputs("draconicevolution:wyvern_core")
        .duration(750)
        .EUt(GTValues.VA[GTValues.EV])
    
        event.recipes.gtceu.assembler("assembler_wyv_nrj_cor")
        .inputFluids("gtceu:draconium 576")
        .itemInputs("4x draconicevolution:draconium_core", "1x gtceu:diamatine_empowered_block", "#gtceu:batteries/luv")
        .itemOutputs("draconicevolution:wyvern_energy_core")
        .duration(750)
        .EUt(GTValues.VA[GTValues.EV])
    
    event.recipes.gtceu.assembler("asmbl_injct_wyv")
        .itemOutputs("draconicevolution:wyvern_crafting_injector")
        .itemInputs("4x gtceu:diamatine_empowered_block", "2x draconicevolution:draconium_core", "1x draconicevolution:wyvern_core", "1x gtceu:draconium_block", "draconicevolution:basic_crafting_injector")
        .inputFluids("gtceu:draconium 1296")
        .duration(3000)
        .EUt(GTValues.VA[GTValues.EV])
    
    event.recipes.gtceu.assembly_line("asmbln_injct_awk")
        .itemOutputs("draconicevolution:awakened_crafting_injector")
        .itemInputs("2x draconicevolution:wyvern_core", "gtceu:awakened_draconium_block", "4x gtceu:diamatine_empowered_block", "draconicevolution:wyvern_crafting_injector")
        .inputFluids("gtceu:awakened_draconium 288", "gtceu:draconium 288")
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack("draconicevolution:wyvern_crafting_injector").EUt(480).duration(1200))
        .duration(3000)
        .EUt(GTValues.VA[GTValues.IV])
    
    event.recipes.gtceu.compressor("cmpr_chaos_shard1")
        .itemInputs("9x draconicevolution:large_chaos_frag")
        .itemOutputs("draconicevolution:chaos_shard")
        .duration(750)
        .EUt(GTValues.VA[GTValues.LuV])
    
    event.recipes.gtceu.compressor("cmpr_chaos_shard2")
        .itemInputs("9x draconicevolution:medium_chaos_frag")
        .itemOutputs("draconicevolution:large_chaos_frag")
        .duration(750)
        .EUt(GTValues.VA[GTValues.LuV])  
    
    event.recipes.gtceu.compressor("cmpr_chaos_shard3")
        .itemInputs("9x draconicevolution:small_chaos_frag")
        .itemOutputs("draconicevolution:medium_chaos_frag")
        .duration(750)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.assembly_line("asmbln_chaos_core")
        .itemOutputs("draconicevolution:chaotic_core")
        .itemInputs("2x draconicevolution:awakened_core", "5x gtceu:awakened_draconium_block", "1x gtceu:diamatine_empowered_block", "6x kubejs:ender_star", "5x draconicevolution:large_chaos_frag")
        .inputFluids("gtceu:unstable_draconium 5184")
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack("draconicevolution:awakened_core").EUt(480).duration(1200))
        .duration(3000)
        .EUt(GTValues.VA[GTValues.UV])
    
    event.recipes.gtceu.assembly_line("assmbln_reactor")
        .itemOutputs("draconicevolution:reactor_core")
        .itemInputs("10x nuclearcraft:hard_carbon_ingot", "4x draconicevolution:large_chaos_frag", "3x gtceu:draconium_block")
        .inputFluids("gtceu:unstable_draconium 1296")
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack("draconicevolution:chaos_shard").EUt(6000).duration(4800))
        .duration(3000)
        .EUt(GTValues.VA[GTValues.UV])
    
    //this one is for the chaotic crafting injector ><
    event.recipes.gtceu.assembly_line("asmbln_CHAOS_CHAOS")
        .itemOutputs("draconicevolution:chaotic_crafting_injector")
        .itemInputs("4x draconicevolution:large_chaos_frag", "8x gtceu:diamatine_empowered_block", "2x gtceu:cryococcus_frame", "2x minecraft:dragon_egg")
        .inputFluids("gtceu:unstable_draconium 1296")
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack("draconicevolution:awakened_crafting_injector").EUt(6000).duration(4800))
        .duration(3000)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler("asmb_awk_nrj_core")
        .itemOutputs("draconicevolution:draconic_energy_core")
        .itemInputs("gtceu:double_awakened_draconium_plate", "4x draconicevolution:wyvern_energy_core", "draconicevolution:wyvern_core")
        .inputFluids("gtceu:awakened_draconium 288")
        .duration(3000)
        .EUt(GTValues.VA[GTValues.IV])
    
    event.recipes.gtceu.packer("pack_drac_dust")
        .itemOutputs("4x gtceu:small_draconium_dust")
        .itemInputs("draconicevolution:draconium_dust")
        .duration(10)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(4)
    })
}
    
    
    