if (Platform.isLoaded("draconicevolution")) {
    console.log("Ayo sum guy said something is gonna explode... loading compat scripts");    

ServerEvents.recipes(event => {

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
        { input: "draconicevolution:awakened_draconium_ingot" },
        "draconicevolution:awakened_draconium_ingot",
        "gtceu:awakened_draconium_ingot"
    )
    
    event.replaceInput(
        { input: "draconicevolution:awakened_draconium_dust" },
        "draconicevolution:awakened_draconium_dust",
        "gtceu:awakened_draconium_dust"
    )

    event.replaceInput(
        { input: "draconicevolution:awakened_draconium_nugget" },
        "draconicevolution:awakened_draconium_nugget",
        "gtceu:awakened_draconium_nugget"
    )

    event.shaped(Item.of("draconicevolution:basic_crafting_injector"), [
        "DPD",
        "RYR",
        "DUD"
    ], {
        D: "gtceu:double_enderium_plate",
        Y: "#gtceu:circuits/mv",
        R: "draconicevolution:draconium_core",
        U: "gtceu:clean_machine_casing",
        P: "gtceu:draconium_gear"
    }).id("draconicevolution:machines/basic_crafting_injecta")
    event.remove({id: "draconicevolution:machines/basic_crafting_injector"})

    event.shaped(Item.of("draconicevolution:entity_detector"), [
        "LML",
        "TYT",
        "IUI"
    ], {
        L: "gtceu:lapis_rod",
        M: "gtceu:mv_sensor",
        T: "gtceu:energium_dust",
        Y: "gtceu:draconium_plate",
        I: "gtceu:iron_plate",
        U: "draconicevolution:draconium_core"
    }).id("draconicevolution:machines/entiti_detector")
    event.remove({id: "draconicevolution:entity_detector"})



    event.shaped(Item.of("draconicevolution:entity_detector_advanced"), [
        "LML",
        "TYT",
        "IUI"
    ], {
        L: "redstone_arsenal:flux_gem_block",
        M: "gtceu:iv_sensor",
        T: "extendedcrafting:crystaltine_ingot",
        Y: "enderio:pulsating_crystal",
        I: "gtceu:iron_plate",
        U: "draconicevolution:entity_detector"
    }).id("draconicevolution:machines/entiti_detector_advanced")
    event.remove({id: "draconicevolution:entity_detector_advanced"})

    event.shaped(Item.of("draconicevolution:dislocator"), [
        "UVU",
        "VPV",
        "UVU"
    ], {
        U: "kubejs:pyrotheum_dust",
        V: "gtceu:draconium_dust",
        P: "gtceu:hv_emitter"
    }).id("draconicevolution:tools/loactor")
    event.remove({id: "draconicevolution:tools/dislocator"})

    event.shaped(Item.of("draconicevolution:crafting_core"), [
        "UVU",
        "VPV",
        "UVU"
    ], {
        U: "gtceu:palis_empowered_block",
        V: "gtceu:diamatine_empowered_gem",
        P: "draconicevolution:draconium_core"
    }).id("draconicevolution:machines/crafting_cor")
    event.remove({id: "draconicevolution:machines/crafting_core"})

    event.shaped(Item.of("draconicevolution:basic_wireless_crystal"), [
        "UVU",
        "TPT",
        "UVU"
    ], {
        U: "minecraft:ender_eye",
        V: "draconicevolution:particle_generator",
        T: "gtceu:hv_sensor",
        P: "draconicevolution:basic_relay_crystal"
    }).id("draconicevolution:machines/wl_crystal")
    event.remove({id: "draconicevolution:machines/basic_wireless_crystal"})

    event.shaped(Item.of("draconicevolution:wyvern_wireless_crystal"), [
        "UVU",
        "TPT",
        "UVU"
    ], {
        U: "minecraft:ender_eye",
        V: "draconicevolution:particle_generator",
        T: "gtceu:iv_sensor",
        P: "draconicevolution:wyvern_relay_crystal"
    }).id("draconicevolution:machines/wyv_wl_crystal")
    event.remove({id: "draconicevolution:machines/wyvern_wireless_crystal"})

    event.shaped(Item.of("draconicevolution:draconic_wireless_crystal"), [
        "UVU",
        "TPT",
        "UVU"
    ], {
        U: "minecraft:ender_eye",
        V: "draconicevolution:particle_generator",
        T: "gtceu:zpm_sensor",
        P: "draconicevolution:draconic_relay_crystal"
    }).id("draconicevolution:machines/drac_wl_crystal")
    event.remove({id: "draconicevolution:machines/draconic_wireless_crystal"})

    event.shaped(Item.of("draconicevolution:magnet"), [
        "G G",
        "R R",
        "UOU"
    ], {
        G: "redstone_arsenal:flux_gem",
        R: "gtceu:draconium_plate",
        U: "gtceu:double_iron_plate",
        O: "draconicevolution:dislocator"
    }).id("draconicevolution:tools/magneton")
    event.remove({id: "draconicevolution:tools/magnet"})

    event.shaped(Item.of("draconicevolution:advanced_magnet"), [
        "G G",
        "R R",
        "UOU"
    ], {
        R: "redstone_arsenal:flux_gem_block",
        G: "gtceu:double_draconium_plate",
        U: "gtceu:awakened_draconium_block",
        O: "draconicevolution:magnet"
    }).id("draconicevolution:tools/better_magneton")
    event.remove({id: "draconicevolution:tools/advanced_magnet"})


    event.remove({ id: "draconicevolution:components/awakened_core"})
    event.recipes.gtceu.assembly_line("fusion_awakened_core")
        .itemOutputs("draconicevolution:awakened_core")
        .itemInputs("4x draconicevolution:wyvern_core", "4x gtceu:awakened_draconium_ingot", "1x kubejs:ender_star", "2x #gtceu:circuits/zpm", "1x gtceu:hssg_frame")
        .inputFluids("gtceu:awakened_draconium 1296")
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack("kubejs:ender_star").EUt(480).duration(1200))
        .duration(4800)
        .EUt(30720)
    
    event.remove({ id: "draconicevolution:machines/basic_relay_crystal"})
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
    event.remove({ id: "draconicevolution:machines/draconic_relay_crystal"})
    event.recipes.gtceu.assembly_line("fusion_betta_relay_crystal")
        .itemOutputs("draconicevolution:draconic_relay_crystal")
        .itemInputs("1x draconicevolution:wyvern_core", "4x draconicevolution:wyvern_energy_core", "3x gtceu:diamatine_empowered_block", "1x #gtceu:circuits/luv", "1x gtceu:stainless_steel_frame")
        .inputFluids("gtceu:awakened_draconium 288")
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack("draconicevolution:basic_relay_crystal").EUt(480).duration(1200))
        .duration(4800)
        .EUt(GTValues.VA[GTValues.LuV])
    
        event.remove({ id: "draconicevolution:machines/draconium_chest"})
        event.recipes.gtceu.assembly_line("assembly_draco_chest")
        .itemOutputs("draconicevolution:draconium_chest")
        .itemInputs("5x gtceu:iv_electric_furnace", "5x draconicevolution:draconium_core", "2x extendedcrafting:advanced_table", "1x gtceu:tungsten_steel_crate")
        .inputFluids("gtceu:draconium 576")
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack("gtceu:titanium_crate").EUt(480).duration(1200))
        .duration(2500)
        .EUt(GTValues.VA[GTValues.IV])
    
    event.remove({ id: "draconicevolution:awakened_draconium_block"})
    event.recipes.gtceu.assembler("assmbler_awk_draconium")
        .inputFluids("gtceu:draconium 1296")
        .itemInputs("10x draconicevolution:draconium_core", "1x draconicevolution:dragon_heart")
        .itemOutputs("4x gtceu:awakened_draconium_block")
        .duration(1500)
        .EUt(GTValues.VA[GTValues.IV])
    
    event.remove({ id: "draconicevolution:components/draconium_core"})
    event.recipes.gtceu.assembler("assembler_drag_core")
        .inputFluids("gtceu:draconium 1296")
        .itemInputs("4x gtceu:draconium_ingot", "4x gtceu:tungsten_carbide_ingot", "1x gtceu:diamatine_empowered_block")
        .itemOutputs("draconicevolution:draconium_core")
        .duration(750)
        .EUt(GTValues.VA[GTValues.HV])

    event.remove({ id: "draconicevolution:machines/particle_generator"})
    event.recipes.gtceu.assembler("assembler_part_gen")
        .inputFluids("gtceu:draconium 288")
        .itemInputs("4x gtceu:electrum_flux_rod", "4x redstone_arsenal:flux_gem_block", "1x draconicevolution:wyvern_core")
        .itemOutputs("draconicevolution:particle_generator")
        .duration(750)
        .EUt(GTValues.VA[GTValues.MV])

    event.remove({ id: "draconicevolution:machines/energy_core_stabilizer"})
    event.recipes.gtceu.assembler("assembler_nrj_stab")
        .inputFluids("gtceu:draconium 288")
        .itemInputs("4x gtceu:enori_empowered_block", "1x draconicevolution:particle_generator")
        .itemOutputs("draconicevolution:energy_core_stabilizer")
        .duration(750)
        .EUt(GTValues.VA[GTValues.MV])
    
    event.remove({ id: "draconicevolution:components/wyvern_core"})
    event.recipes.gtceu.assembler("assembler_wyv_drag_core")
        .inputFluids("gtceu:draconium 1296")
        .itemInputs("4x gtceu:draconium_ingot", "4x draconicevolution:draconium_core", "1x kubejs:ender_star")
        .itemOutputs("draconicevolution:wyvern_core")
        .duration(750)
        .EUt(GTValues.VA[GTValues.EV])
    
    event.remove({ id: "draconicevolution:components/wyvern_energy_core"})
    event.recipes.gtceu.assembler("assembler_wyv_nrj_cor")
        .inputFluids("gtceu:draconium 576")
        .itemInputs("4x draconicevolution:draconium_core", "1x gtceu:diamatine_empowered_block", "#gtceu:batteries/luv")
        .itemOutputs("draconicevolution:wyvern_energy_core")
        .duration(750)
        .EUt(GTValues.VA[GTValues.EV])

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:awakened_crafting_injector"
            },
            "catalyst": {
                "item": "draconicevolution:wyvern_crafting_injector"
            },
            "total_energy": 256000,
            "tier": "WYVERN",
            "ingredients": [
                {
                    "item": "gtceu:diamatine_empowered_block"
                },
                {
                    "item": "gtceu:diamatine_empowered_block"
                },
                {
                    "item": "gtceu:diamatine_empowered_block"
                },
                {
                    "item": "gtceu:diamatine_empowered_block"
                },
                {
                    "item": "draconicevolution:wyvern_core"
                },
                {
                    "item": "draconicevolution:wyvern_core"
                },
                {
                    "item": "gtceu:awakened_draconium_block"
                },
                {
                    "item": "gtceu:awakened_draconium_block"
                }

            ]
        }
    ).id("draconicevolution:machines/awakened_crafting_injecta")
    event.remove({ id: "draconicevolution:machines/awakened_crafting_injector"})

    event.recipes.gtceu.compressor("cmpr_chaos_shard1")
        .itemInputs("9x draconicevolution:large_chaos_frag")
        .itemOutputs("draconicevolution:chaos_shard")
        .duration(750)
        .EUt(GTValues.VA[GTValues.LV])
    
    event.recipes.gtceu.compressor("cmpr_chaos_shard2")
        .itemInputs("9x draconicevolution:medium_chaos_frag")
        .itemOutputs("draconicevolution:large_chaos_frag")
        .duration(750)
        .EUt(GTValues.VA[GTValues.LV])  
    
    event.recipes.gtceu.compressor("cmpr_chaos_shard3")
        .itemInputs("9x draconicevolution:small_chaos_frag")
        .itemOutputs("draconicevolution:medium_chaos_frag")
        .duration(750)
        .EUt(GTValues.VA[GTValues.LV])

    event.remove({ id: "draconicevolution:components/chaotic_core"})
    event.recipes.gtceu.assembly_line("asmbln_chaos_core")
        .itemOutputs("draconicevolution:chaotic_core")
        .itemInputs("2x draconicevolution:awakened_core", "5x gtceu:awakened_draconium_block", "1x gtceu:diamatine_empowered_block", "6x kubejs:ender_star", "5x draconicevolution:large_chaos_frag")
        .inputFluids("gtceu:unstable_draconium 5184")
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack("draconicevolution:awakened_core").EUt(480).duration(1200))
        .duration(3000)
        .EUt(GTValues.VA[GTValues.UV])

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:reactor_core"
            },
            "catalyst": {
                "item": "draconicevolution:chaos_shard"
            },
            "total_energy": 64000000,
            "tier": "CHAOTIC",
            "ingredients": [
                {
                    "item": "nuclearcraft:hard_carbon_ingot"
                },
                {
                    "item": "nuclearcraft:hard_carbon_ingot"
                },
                {
                    "item": "nuclearcraft:hard_carbon_ingot"
                },
                {
                    "item": "draconicevolution:large_chaos_frag"
                },
                {
                    "item": "draconicevolution:large_chaos_frag"
                },
                {
                    "item": "draconicevolution:large_chaos_frag"
                },
                {
                    "item": "draconicevolution:large_chaos_frag"
                },
                {
                    "item": "gtceu:unstable_draconium_frame"
                },
                {
                    "item": "gtceu:unstable_draconium_block" 
                }
            ]
        }
    ).id("draconicevolution:machines/da_reactoe")
    event.remove({ id: "draconicevolution:machines/reactor_core"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:chaotic_crafting_injector" //CHAOS CHAOS I CAN DO ANYTHING
            },
            "catalyst": {
                "item": "draconicevolution:awakened_crafting_injector"
            },
            "total_energy": 64000000,
            "tier": "CHAOTIC",
            "ingredients": [
                {
                    "item": "gtceu:diamatine_empowered_block"
                },
                {
                    "item": "gtceu:diamatine_empowered_block"
                },
                {
                    "item": "gtceu:unstable_draconium_block"
                },
                {
                    "item": "draconicevolution:large_chaos_frag"
                },
                {
                    "item": "draconicevolution:large_chaos_frag"
                },
                {
                    "item": "draconicevolution:large_chaos_frag"
                },
                {
                    "item": "draconicevolution:large_chaos_frag"
                },
                {
                    "item": "gtceu:cryococcus_frame"
                },
                {
                   "item": "minecraft:dragon_egg" 
                }
            ]
        }
    ).id("draconicevolution:machines/chaotic_injecta")
    event.remove({ id: "draconicevolution:machines/chaotic_crafting_injector"})

    event.remove({ id: "draconicevolution:components/draconic_energy_core"})
    event.recipes.gtceu.assembler("asmb_awk_nrj_core")
        .itemOutputs("draconicevolution:draconic_energy_core")
        .itemInputs("4x gtceu:double_awakened_draconium_plate", "4x draconicevolution:wyvern_energy_core", "draconicevolution:wyvern_core")
        .inputFluids("gtceu:awakened_draconium 288")
        .duration(3000)
        .EUt(GTValues.VA[GTValues.IV])

    event.remove({ id: "draconicevolution:components/chaotic_energy_core"})
    event.recipes.gtceu.assembler("asmb_chaotic_nrj_core")
        .itemOutputs("draconicevolution:chaotic_energy_core")
        .itemInputs("4x draconicevolution:draconic_energy_core", "4x draconicevolution:awakened_core", "#gtceu:batteries/zpm", "4x draconicevolution:medium_chaos_frag")
        .inputFluids("gtceu:unstable_draconium 1296")
        .duration(3000)
        .EUt(GTValues.VA[GTValues.ZPM])
    
    event.recipes.gtceu.packer("pack_drac_dust")
        .itemOutputs("4x gtceu:small_draconium_dust")
        .itemInputs("draconicevolution:draconium_dust")
        .duration(10)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(4)

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:wyvern_pickaxe"
            },
            "catalyst": {
                "item": "gtceu:steel_pickaxe"
            },
            "total_energy": 8000000,
            "tier": "WYVERN",
            "ingredients": [
                {
                    "item": "gtceu:draconium_block"
                },
                {
                    "item": "gtceu:draconium_rod"
                },
                {
                    "item": "draconicevolution:wyvern_energy_core"
                },
                {
                    "item": "draconicevolution:basic_relay_crystal"
                },
                {
                    "tag": "gtceu:circuits/hv"
                },
                {
                    "item": "gtceu:draconium_ingot"
                }

            ]
        }
    ).id("draconicevolution:tools/wyvern_pick")
    event.remove({ id: "draconicevolution:tools/wyvern_pickaxe"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:wyvern_sword"
            },
            "catalyst": {
                "item": "gtceu:steel_sword"
            },
            "total_energy": 8000000,
            "tier": "WYVERN",
            "ingredients": [
                {
                    "item": "gtceu:draconium_block"
                },
                {
                    "item": "gtceu:draconium_rod"
                },
                {
                    "item": "draconicevolution:wyvern_energy_core"
                },
                {
                    "item": "draconicevolution:basic_relay_crystal"
                },
                {
                    "tag": "gtceu:circuits/hv"
                },
                {
                    "item": "gtceu:draconium_ingot"
                }

            ]
        }
    ).id("draconicevolution:tools/wyvern_swod")
    event.remove({ id: "draconicevolution:tools/wyvern_sword"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:wyvern_axe"
            },
            "catalyst": {
                "item": "gtceu:steel_axe"
            },
            "total_energy": 8000000,
            "tier": "WYVERN",
            "ingredients": [
                {
                    "item": "gtceu:draconium_block"
                },
                {
                    "item": "gtceu:draconium_rod"
                },
                {
                    "item": "draconicevolution:wyvern_energy_core"
                },
                {
                    "item": "draconicevolution:basic_relay_crystal"
                },
                {
                    "tag": "gtceu:circuits/hv"
                },
                {
                    "item": "gtceu:draconium_ingot"
                }

            ]
        }
    ).id("draconicevolution:tools/wyvern_awe")
    event.remove({ id: "draconicevolution:tools/wyvern_axe"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:wyvern_shovel"
            },
            "catalyst": {
                "item": "gtceu:steel_shovel"
            },
            "total_energy": 8000000,
            "tier": "WYVERN",
            "ingredients": [
                {
                    "item": "gtceu:draconium_block"
                },
                {
                    "item": "gtceu:draconium_rod"
                },
                {
                    "item": "draconicevolution:wyvern_energy_core"
                },
                {
                    "item": "draconicevolution:basic_relay_crystal"
                },
                {
                    "tag": "gtceu:circuits/hv"
                },
                {
                    "item": "gtceu:draconium_ingot"
                }

            ]
        }
    ).id("draconicevolution:tools/wyvern_shoval")
    event.remove({ id: "draconicevolution:tools/wyvern_shovel"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:wyvern_hoe"
            },
            "catalyst": {
                "item": "gtceu:steel_hoe"
            },
            "total_energy": 8000000,
            "tier": "WYVERN",
            "ingredients": [
                {
                    "item": "gtceu:draconium_block"
                },
                {
                    "item": "gtceu:draconium_rod"
                },
                {
                    "item": "draconicevolution:wyvern_energy_core"
                },
                {
                    "item": "draconicevolution:basic_relay_crystal"
                },
                {
                    "tag": "gtceu:circuits/hv"
                },
                {
                    "item": "gtceu:draconium_ingot"
                }

            ]
        }
    ).id("draconicevolution:tools/wyvern_ho")// yuh uh ho
    event.remove({ id: "draconicevolution:tools/wyvern_hoe"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:wyvern_chestpiece"
            },
            "catalyst": {
                "item": "minecraft:diamond_chestplate"
            },
            "total_energy": 8000000,
            "tier": "WYVERN",
            "ingredients": [
                {
                    "item": "gtceu:draconium_block"
                },
                {
                    "item": "gtceu:draconium_frame"
                },
                {
                    "item": "draconicevolution:wyvern_energy_core"
                },
                {
                    "item": "draconicevolution:basic_relay_crystal"
                },
                {
                    "tag": "gtceu:circuits/hv"
                },
                {
                    "item": "gtceu:draconium_ingot"
                }

            ]
        }
    ).id("draconicevolution:tools/wyvern_chess")
    event.remove({ id: "draconicevolution:tools/wyvern_chestpiece"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:wyvern_bow"
            },
            "catalyst": {
                "item": "redstone_arsenal:flux_bow"
            },
            "total_energy": 8000000,
            "tier": "WYVERN",
            "ingredients": [
                {
                    "item": "gtceu:draconium_block"
                },
                {
                    "item": "gtceu:draconium_plate"
                },
                {
                    "item": "draconicevolution:wyvern_energy_core"
                },
                {
                    "item": "draconicevolution:basic_relay_crystal"
                },
                {
                    "tag": "gtceu:circuits/hv"
                },
                {
                    "item": "gtceu:draconium_ingot"
                }

            ]
        }
    ).id("draconicevolution:tools/wyvern_rainbow")
    event.remove({ id: "draconicevolution:tools/wyvern_bow"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:wyvern_crafting_injector"
            },
            "catalyst": {
                "item": "draconicevolution:basic_crafting_injector"
            },
            "total_energy": 256000,
            "tier": "WYVERN",
            "ingredients": [
                {
                    "item": "gtceu:diamatine_empowered_block"
                },
                {
                    "item": "gtceu:diamatine_empowered_block"
                },
                {
                    "item": "gtceu:draconium_frame"
                },
                {
                    "item": "gtceu:diamatine_empowered_block"
                },
                {
                    "item": "draconicevolution:draconium_core"
                },
                {
                    "item": "draconicevolution:draconium_core"
                },
                {
                    "item": "gtceu:draconium_block"
                },
                {
                    "item": "draconicevolution:wyvern_core"
                }

            ]
        }
    ).id("draconicevolution:machines/wyvern_crafting_injecta")
    event.remove({ id: "draconicevolution:machines/wyvern_crafting_injector"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:draconic_axe"
            },
            "catalyst": {
                "item": "draconicevolution:wyvern_axe"
            },
            "total_energy": 32000000,
            "tier": "DRACONIC",
            "ingredients": [
                {
                    "item": "gtceu:double_enderium_plate"
                },
                {
                    "item": "gtceu:double_enderium_plate"
                },
                {
                    "item": "gtceu:draconium_plate"
                },
                {
                    "item": "gtceu:draconium_plate"
                },
                {
                    "tag": "gtceu:circuits/zpm"
                },
                {
                    "item": "draconicevolution:draconic_energy_core"
                },
                {
                    "tag": "gtceu:circuits/zpm"
                },
                {
                    "item": "gtceu:awakened_draconium_block"
                }

            ]
        }
    ).id("draconicevolution:tools/draconic_axeL")
    event.remove({ id: "draconicevolution:tools/draconic_axe"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:draconic_shovel"
            },
            "catalyst": {
                "item": "draconicevolution:wyvern_shovel"
            },
            "total_energy": 32000000,
            "tier": "DRACONIC",
            "ingredients": [
                {
                    "item": "gtceu:double_enderium_plate"
                },
                {
                    "item": "gtceu:double_enderium_plate"
                },
                {
                    "item": "gtceu:draconium_plate"
                },
                {
                    "item": "gtceu:draconium_plate"
                },
                {
                    "tag": "gtceu:circuits/zpm"
                },
                {
                    "item": "draconicevolution:draconic_energy_core"
                },
                {
                    "tag": "gtceu:circuits/zpm"
                },
                {
                    "item": "gtceu:awakened_draconium_block"
                }

            ]
        }
    ).id("draconicevolution:tools/draconic_shover")
    event.remove({ id: "draconicevolution:tools/draconic_shovel"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:draconic_pickaxe"
            },
            "catalyst": {
                "item": "draconicevolution:wyvern_pickaxe"
            },
            "total_energy": 32000000,
            "tier": "DRACONIC",
            "ingredients": [
                {
                    "item": "gtceu:double_enderium_plate"
                },
                {
                    "item": "gtceu:double_enderium_plate"
                },
                {
                    "item": "gtceu:draconium_plate"
                },
                {
                    "item": "gtceu:draconium_plate"
                },
                {
                    "tag": "gtceu:circuits/zpm"
                },
                {
                    "item": "draconicevolution:draconic_energy_core"
                },
                {
                    "tag": "gtceu:circuits/zpm"
                },
                {
                    "item": "gtceu:awakened_draconium_block"
                }

            ]
        }
    ).id("draconicevolution:tools/draconic_picky")
    event.remove({ id: "draconicevolution:tools/draconic_pickaxe"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:draconic_hoe"
            },
            "catalyst": {
                "item": "draconicevolution:wyvern_hoe"
            },
            "total_energy": 32000000,
            "tier": "DRACONIC",
            "ingredients": [
                {
                    "item": "gtceu:double_enderium_plate"
                },
                {
                    "item": "gtceu:double_enderium_plate"
                },
                {
                    "item": "gtceu:draconium_plate"
                },
                {
                    "item": "gtceu:draconium_plate"
                },
                {
                    "tag": "gtceu:circuits/zpm"
                },
                {
                    "item": "draconicevolution:draconic_energy_core"
                },
                {
                    "tag": "gtceu:circuits/zpm"
                },
                {
                    "item": "gtceu:awakened_draconium_block"
                }

            ]
        }
    ).id("draconicevolution:tools/draconic_ho")
    event.remove({ id: "draconicevolution:tools/draconic_hoe"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:draconic_sword"
            },
            "catalyst": {
                "item": "draconicevolution:wyvern_sword"
            },
            "total_energy": 32000000,
            "tier": "DRACONIC",
            "ingredients": [
                {
                    "item": "gtceu:double_enderium_plate"
                },
                {
                    "item": "gtceu:double_enderium_plate"
                },
                {
                    "item": "gtceu:draconium_plate"
                },
                {
                    "item": "gtceu:draconium_plate"
                },
                {
                    "tag": "gtceu:circuits/zpm"
                },
                {
                    "item": "draconicevolution:draconic_energy_core"
                },
                {
                    "tag": "gtceu:circuits/zpm"
                },
                {
                    "item": "gtceu:awakened_draconium_block"
                }

            ]
        }
    ).id("draconicevolution:tools/draconic_swod")
    event.remove({ id: "draconicevolution:tools/draconic_sword"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:draconic_chestpiece"
            },
            "catalyst": {
                "item": "draconicevolution:wyvern_chestpiece"
            },
            "total_energy": 32000000,
            "tier": "DRACONIC",
            "ingredients": [
                {
                    "item": "gtceu:double_enderium_plate"
                },
                {
                    "item": "gtceu:double_enderium_plate"
                },
                {
                    "item": "gtceu:draconium_plate"
                },
                {
                    "item": "gtceu:awakened_draconium_frame"
                },
                {
                    "tag": "gtceu:circuits/zpm"
                },
                {
                    "item": "draconicevolution:draconic_energy_core"
                },
                {
                    "tag": "gtceu:circuits/zpm"
                },
                {
                    "item": "gtceu:awakened_draconium_block"
                }

            ]
        }
    ).id("draconicevolution:tools/draconic_chess")
    event.remove({ id: "draconicevolution:tools/draconic_chestpiece"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:draconic_bow"
            },
            "catalyst": {
                "item": "draconicevolution:wyvern_bow"
            },
            "total_energy": 32000000,
            "tier": "DRACONIC",
            "ingredients": [
                {
                    "item": "gtceu:double_enderium_plate"
                },
                {
                    "item": "gtceu:double_enderium_plate"
                },
                {
                    "item": "gtceu:draconium_plate"
                },
                {
                    "item": "gtceu:awakened_draconium_frame"
                },
                {
                    "tag": "gtceu:circuits/zpm"
                },
                {
                    "item": "draconicevolution:draconic_energy_core"
                },
                {
                    "tag": "gtceu:circuits/zpm"
                },
                {
                    "item": "gtceu:awakened_draconium_block"
                }

            ]
        }
    ).id("draconicevolution:tools/draconic_rianbow")
    event.remove({ id: "draconicevolution:tools/draconic_bow"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:draconic_staff"
            },
            "catalyst": {
                "item": "draconicevolution:awakened_core"
            },
            "total_energy": 32000000,
            "tier": "DRACONIC",
            "ingredients": [
                {
                    "item": "draconicevolution:draconic_sword"
                },
                {
                    "item": "draconicevolution:draconic_pickaxe"
                },
                {
                    "item": "draconicevolution:draconic_shovel"
                },
                {
                    "item": "draconicevolution:draconic_hoe"
                },
                {
                    "item": "draconicevolution:draconic_axe"
                },
                {
                    "item": "draconicevolution:draconic_energy_core"
                },
                {
                    "tag": "gtceu:circuits/luv"
                },
                {
                    "item": "gtceu:awakened_draconium_block"
                }

            ]
        }
    ).id("draconicevolution:tools/draconic_staffy")
    event.remove({ id: "draconicevolution:tools/draconic_staff"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:advanced_dislocator"
            },
            "catalyst": {
                "item": "draconicevolution:dislocator"
            },
            "total_energy": 1000000,
            "tier": "WYVERN",
            "ingredients": [
                {
                    "item": "minecraft:ender_eye"
                },
                {
                    "item": "minecraft:ender_eye"
                },
                {
                    "item": "minecraft:ender_eye"
                },
                {
                    "item": "draconicevolution:wyvern_core"
                },
                {
                    "item": "draconicevolution:wyvern_core"
                },
                {
                    "item": "gtceu:draconium_block"
                },
                {
                    "item": "gtceu:draconium_block"
                },
                {
                    "item": "gtceu:draconium_block"
                }

            ]
        }
    ).id("draconicevolution:tools/advanced_loactor")
    event.remove({ id: "draconicevolution:tools/advanced_dislocator"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:reactor_injector"
            },
            "catalyst": {
                "item": "draconicevolution:wyvern_core"
            },
            "total_energy": 16000000,
            "tier": "CHAOTIC",
            "ingredients": [
                {
                    "item": "gtceu:draconium_plate"
                },
                {
                    "item": "gtceu:draconium_plate"
                },
                {
                    "item": "gtceu:draconium_plate"
                },
                {
                    "item": "gtceu:draconium_plate"
                },
                {
                    "item": "gtceu:double_iron_plate"
                },
                {
                    "item": "gtceu:double_iron_plate"
                },
                {
                    "item": "draconicevolution:reactor_prt_in_rotor"
                },
                {
                    "item": "draconicevolution:reactor_prt_in_rotor"
                },
                {
                    "item": "draconicevolution:reactor_prt_in_rotor"
                },
                {
                    "item": "draconicevolution:reactor_prt_in_rotor"
                }

            ]
        }
    ).id("draconicevolution:machines/da_reacta_injecta")
    event.remove({ id: "draconicevolution:machines/reactor_injector"})

    event.shaped(("draconicevolution:reactor_prt_focus_ring"), [
        "FOF",
        "JOJ",
        "FOF"
    ], {
            F: "gtceu:gold_rod",
            O: "gtceu:diamatine_empowered_gem",
            J: "draconicevolution:wyvern_core"
    }).id("draconicevolution:machines/reactor_prt_focus_ringgy")
    event.remove({id: "draconicevolution:machines/reactor_prt_focus_ring"})

    event.shaped(Item.of("draconicevolution:reactor_prt_in_rotor"), [
        "FFF",
        "JOO",
        "   "
    ], {
        F: "gtceu:double_awakened_draconium_plate",
        O: "gtceu:draconium_plate",
        J: "draconicevolution:draconium_core"
    }).id("draconicevolution:machines/reactor_prt_in_rotatt")
    event.remove({id: "draconicevolution:machines/reactor_prt_in_rotor"})

    event.shaped(Item.of("draconicevolution:reactor_prt_out_rotor"), [
        "FFF",
        "JOO",
        "   "
    ], {
            F: "gtceu:diamatine_empowered_gem",
            O: "gtceu:draconium_plate",
            J: "draconicevolution:draconium_core"
    }).id("draconicevolution:machines/reactor_prt_out_rotatt")
    event.remove({id: "draconicevolution:machines/reactor_prt_out_rotor"})

    event.shaped(Item.of("draconicevolution:reactor_prt_stab_frame"), [
        "FFF",
        "JO ",
        "FFF"
    ], {
        F: "gtceu:double_iron_plate",
        J: "draconicevolution:wyvern_core",
        O: "gtceu:awakened_draconium_frame"
    }).id("draconicevolution:machines/reactor_prt_stabber_frame")
    event.remove({id: "draconicevolution:machines/reactor_prt_stab_frame"})

    event.shaped(Item.of("draconicevolution:reactor_prt_rotor_full"), [
        " RT",
        "YOO",
        " RT"
    ], {
        R: "draconicevolution:reactor_prt_in_rotor",
        T: "draconicevolution:reactor_prt_out_rotor",
        O: "gtceu:double_draconium_plate",
        Y: "draconicevolution:awakened_core"
    }).id("draconicevolution:machines/reactor_prt_stabber_fully")
    event.remove({id: "draconicevolution:machines/reactor_prt_rotor_full"})

    event.shaped(Item.of("draconicevolution:dislocation_inhibitor"), [
        "EEE",
        "OPO",
        "EEE"
    ], {
        E: "gtceu:double_dark_steel_plate",
        O: "enderio:dark_steel_bars",
        P: "draconicevolution:magnet"
    }).id("draconicevolution:machines/dislocator_inhibitor")
    event.remove({id:"draconicevolution:dislocation_inhibitor"})

    event.shaped(Item.of("draconicevolution:celestial_manipulator"), [
        "MPM",
        "OLO",
        "IKI"
    ], {
        M: "redstone_arsenal:flux_gem_block",
        P: "minecraft:clock",
        O: "gtceu:draconium_ingot",
        L: "minecraft:dragon_egg",
        I: "gtceu:double_iron_plate",
        K: "draconicevolution:wyvern_core"
    }).id("draconicevolution:machines/celestial_manipulata")
    event.remove({id:"draconicevolution:celestial_manipulator"})

    event.shaped(Item.of("draconicevolution:disenchanter"), [
        "OPO",
        "UIU",
        "LLL"
    ], {
        O: "gtceu:emeradic_empowered_gem",
        P: "draconicevolution:draconium_core",
        U: "minecraft:book",
        I: "minecraft:enchanting_table",
        L: "minecraft:bookshelf"
    }).id("draconicevolution:machines/disenchanta")
    event.remove({id:"draconicevolution:disenchanter"})

    event.shaped(Item.of("draconicevolution:energy_pylon"), [
        "OTO",
        "PRP",
        "OIO"
    ], {
        O: "gtceu:double_draconium_plate",
        T: "gtceu:quantum_eye",
        P: "gtceu:emeradic_empowered_gem",
        I: "gtceu:diamatine_empowered_gem",
        R: "draconicevolution:draconium_core"
    }).id("draconicevolution:machines/energy_python")
    event.remove({id:"draconicevolution:machines/energy_pylon"})

    event.shaped(Item.of("draconicevolution:energy_core"), [
        "PPP",
        "OIO",
        "PPP"
    ], {
        P: "gtceu:double_draconium_plate",
        O: "draconicevolution:wyvern_energy_core",
        I: "draconicevolution:wyvern_core"
    }).id("draconicevolution:machines/energy_corey")
    event.remove({id:"draconicevolution:machines/energy_core"})

    event.shaped(Item.of("draconicevolution:infused_obsidian"), [
        "POP",
        "OIO",
        "POP"
    ], {
        P: "kubejs:pyrotheum_dust",
        O: "gtceu:double_dark_steel_plate",
        I: "draconicevolution:draconium_core"
    }).id("draconicevolution:machines/infused_obsidin") // no troll name this time :(
    event.remove({id:"draconicevolution:infused_obsidian"})

    event.shaped(Item.of("draconicevolution:dislocator_receptacle"), [
        "POP",
        " I ",
        "P P"
    ], {
        P: "gtceu:double_iron_plate",
        I: "draconicevolution:infused_obsidian",
        O: "draconicevolution:draconium_core"
    }).id("draconicevolution:machines/dislocator_recept")
    event.remove({id:"draconicevolution:dislocator_receptacle"})

    event.shaped(Item.of("draconicevolution:potentiometer"), [
        " K ",
        "JHJ",
        "GGG"
    ], {
        J: "gtceu:energium_dust",
        H: "gtceu:draconium_plate",
        G: "gtceu:dense_steel_plate",
        K: "gtceu:hv_emitter"
    }).id("draconicevolution:machines/potentiometr")
    event.remove({id:"draconicevolution:machines/potentiometer"})

    event.shaped(Item.of("draconicevolution:rain_sensor"), [
        " K ",
        "JHJ",
        "GGG"
    ], {
        J: "gtceu:energium_dust",
        K: "gtceu:hv_sensor",
        G: "gtceu:dense_steel_plate",
        H: "minecraft:stone_pressure_plate"
    }).id("draconicevolution:machines/rain_sensor")
    event.remove({id:"draconicevolution:rain_sensor"})

    event.shaped(Item.of("draconicevolution:flux_gate"), [
        "UBU",
        "SFS",
        "UMU"
    ], {
        U: "gtceu:double_iron_plate",
        B: "draconicevolution:potentiometer",
        S: "gtceu:electrum_octal_cable",
        F: "draconicevolution:draconium_core",
        M: "gtceu:hv_machine_hull"
    }).id("draconicevolution:machines/flux_gateway")
    event.remove({id:"draconicevolution:flux_gate"})

    event.shaped(Item.of("draconicevolution:fluid_gate"), [
        "UBU",
        "SFS",
        "UMU"
    ], {
        U: "gtceu:double_iron_plate",
        B: "draconicevolution:potentiometer",
        S: "gtceu:titanium_normal_fluid_pipe",
        F: "draconicevolution:draconium_core",
        M: "gtceu:hv_machine_hull"
    }).id("draconicevolution:machines/fluid_gateway")
    event.remove({id:"draconicevolution:fluid_gate"})

    event.remove({id:"draconicevolution:machines/grinder"})
    event.recipes.gtceu.assembler("assmb_grndr")
        .itemOutputs("draconicevolution:grinder")
        .itemInputs("4x gtceu:iron_plate", "gtceu:draconium_frame", "2x redstone_arsenal:flux_sword", "2x #forge:heads", "draconicevolution:wyvern_energy_core")
        .inputFluids("gtceu:draconium 576")
        .duration(3000)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.assembler("assmb_mdl_core")
        .itemOutputs("draconicevolution:module_core")
        .itemInputs("4x gtceu:iron_rod", "2x gtceu:energium_dust", "2x gtceu:gold_plate", "gtceu:draconium_plate")
        .duration(300)
        .EUt(GTValues.VA[GTValues.HV])
    event.remove({id:"draconicevolution:modules/module_core"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:reactor_stabilizer"
            },
            "catalyst": {
                "item": "draconicevolution:reactor_prt_stab_frame"
            },
            "total_energy": 16000000,
            "tier": "CHAOTIC",
            "ingredients": [
                {
                    "item": "draconicevolution:draconic_energy_core"
                },
                {
                    "item": "draconicevolution:draconic_energy_core"
                },
                {
                    "item": "draconicevolution:large_chaos_frag"
                },
                {
                    "item": "draconicevolution:large_chaos_frag"
                },
                {
                    "item": "draconicevolution:chaotic_core"
                },
                {
                    "item": "draconicevolution:chaotic_core"
                },
                {
                    "item": "draconicevolution:reactor_prt_rotor_full"
                },
                {
                    "item": "draconicevolution:reactor_prt_focus_ring"
                }
            ]
        }
    ).id("draconicevolutevention:machines/reactor_stabilizing")
    event.remove({ id: "draconicevolution:machines/reactor_stabilizer"})

    event.remove({ id: "draconicevolution:machines/wyvern_relay_crystal"})
    event.recipes.gtceu.assembler("assmb_wyv_crystal")
        .itemInputs("4x draconicevolution:wyvern_energy_core", "4x draconicevolution:basic_relay_crystal", "draconicevolution:wyvern_core")
        .inputFluids("gtceu:draconium 288")
        .itemOutputs("4x draconicevolution:wyvern_relay_crystal")
        .duration(750)
        .EUt(GTValues.VA[GTValues.EV])

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:chaotic_axe"
            },
            "catalyst": {
                "item": "draconicevolution:draconic_axe"
            },
            "total_energy": 128000000,
            "tier": "CHAOTIC",
            "ingredients": [
                {
                    "item": "draconicevolution:chaotic_energy_core"
                },
                {
                    "item": "draconicevolution:chaotic_energy_core"
                },
                {
                    "item": "draconicevolution:chaotic_core"
                },
                {
                    "item": "draconicevolution:chaotic_core"
                },
                {
                    "item": "gtceu:unstable_draconium_rod"
                },
                {
                    "item": "gtceu:unstable_draconium_plate"
                },
                {
                    "tag": "gtceu:circuits/uv"
                },
                {
                    "tag": "gtceu:circuits/uv"
                }

            ]
        }
    ).id("draconicevolution:tools/chaotic_axeL")
    event.remove({ id: "draconicevolution:tools/chaotic_axe"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:chaotic_pickaxe"
            },
            "catalyst": {
                "item": "draconicevolution:draconic_pickaxe"
            },
            "total_energy": 128000000,
            "tier": "CHAOTIC",
            "ingredients": [
                {
                    "item": "draconicevolution:chaotic_energy_core"
                },
                {
                    "item": "draconicevolution:chaotic_energy_core"
                },
                {
                    "item": "draconicevolution:chaotic_core"
                },
                {
                    "item": "draconicevolution:chaotic_core"
                },
                {
                    "item": "gtceu:unstable_draconium_rod"
                },
                {
                    "item": "gtceu:unstable_draconium_plate"
                },
                {
                    "tag": "gtceu:circuits/uv"
                },
                {
                    "tag": "gtceu:circuits/uv"
                }

            ]
        }
    ).id("draconicevolution:tools/chaotic_picky")
    event.remove({ id: "draconicevolution:tools/chaotic_pickaxe"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:chaotic_shovel"
            },
            "catalyst": {
                "item": "draconicevolution:draconic_shovel"
            },
            "total_energy": 128000000,
            "tier": "CHAOTIC",
            "ingredients": [
                {
                    "item": "draconicevolution:chaotic_energy_core"
                },
                {
                    "item": "draconicevolution:chaotic_energy_core"
                },
                {
                    "item": "draconicevolution:chaotic_core"
                },
                {
                    "item": "draconicevolution:chaotic_core"
                },
                {
                    "item": "gtceu:unstable_draconium_rod"
                },
                {
                    "item": "gtceu:unstable_draconium_plate"
                },
                {
                    "tag": "gtceu:circuits/uv"
                },
                {
                    "tag": "gtceu:circuits/uv"
                }

            ]
        }
    ).id("draconicevolution:tools/chaotic_shovem")
    event.remove({ id: "draconicevolution:tools/chaotic_shovel"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:chaotic_sword"
            },
            "catalyst": {
                "item": "draconicevolution:draconic_sword"
            },
            "total_energy": 128000000,
            "tier": "CHAOTIC",
            "ingredients": [
                {
                    "item": "draconicevolution:chaotic_energy_core"
                },
                {
                    "item": "draconicevolution:chaotic_energy_core"
                },
                {
                    "item": "draconicevolution:chaotic_core"
                },
                {
                    "item": "draconicevolution:chaotic_core"
                },
                {
                    "item": "gtceu:unstable_draconium_rod"
                },
                {
                    "item": "gtceu:unstable_draconium_plate"
                },
                {
                    "tag": "gtceu:circuits/uv"
                },
                {
                    "tag": "gtceu:circuits/uv"
                }

            ]
        }
    ).id("draconicevolution:tools/chaotic_swod")
    event.remove({ id: "draconicevolution:tools/chaotic_sword"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:chaotic_hoe"
            },
            "catalyst": {
                "item": "draconicevolution:draconic_hoe"
            },
            "total_energy": 128000000,
            "tier": "CHAOTIC",
            "ingredients": [
                {
                    "item": "draconicevolution:chaotic_energy_core"
                },
                {
                    "item": "draconicevolution:chaotic_energy_core"
                },
                {
                    "item": "draconicevolution:chaotic_core"
                },
                {
                    "item": "draconicevolution:chaotic_core"
                },
                {
                    "item": "gtceu:unstable_draconium_rod"
                },
                {
                    "item": "gtceu:unstable_draconium_plate"
                },
                {
                    "tag": "gtceu:circuits/uv"
                },
                {
                    "tag": "gtceu:circuits/uv"
                }

            ]
        }
    ).id("draconicevolution:tools/chaotic_ho")
    event.remove({ id: "draconicevolution:tools/chaotic_hoe"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:chaotic_chestpiece"
            },
            "catalyst": {
                "item": "draconicevolution:draconic_chestpiece"
            },
            "total_energy": 128000000,
            "tier": "CHAOTIC",
            "ingredients": [
                {
                    "item": "draconicevolution:chaotic_energy_core"
                },
                {
                    "item": "draconicevolution:chaotic_energy_core"
                },
                {
                    "item": "draconicevolution:chaotic_core"
                },
                {
                    "item": "draconicevolution:chaotic_core"
                },
                {
                    "item": "gtceu:unstable_draconium_rod"
                },
                {
                    "item": "gtceu:unstable_draconium_plate"
                },
                {
                    "tag": "gtceu:circuits/uv"
                },
                {
                    "tag": "gtceu:circuits/uv"
                }

            ]
        }
    ).id("draconicevolution:tools/chaotic_chess")
    event.remove({ id: "draconicevolution:tools/chaotic_chestpiece"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:chaotic_bow"
            },
            "catalyst": {
                "item": "draconicevolution:draconic_bow"
            },
            "total_energy": 128000000,
            "tier": "CHAOTIC",
            "ingredients": [
                {
                    "item": "draconicevolution:chaotic_energy_core"
                },
                {
                    "item": "draconicevolution:chaotic_energy_core"
                },
                {
                    "item": "draconicevolution:chaotic_core"
                },
                {
                    "item": "draconicevolution:chaotic_core"
                },
                {
                    "item": "gtceu:unstable_draconium_rod"
                },
                {
                    "item": "gtceu:unstable_draconium_plate"
                },
                {
                    "tag": "gtceu:circuits/uv"
                },
                {
                    "tag": "gtceu:circuits/uv"
                }

            ]
        }
    ).id("draconicevolution:tools/chaotic_rainbow")
    event.remove({ id: "draconicevolution:tools/chaotic_bow"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:draconic_capacitor"
            },
            "catalyst": {
                "item": "draconicevolution:wyvern_capacitor"
            },
            "total_energy": 32000000,
            "tier": "DRACONIC",
            "ingredients": [
                {
                    "item": "draconicevolution:draconic_energy_core"
                },
                {
                    "item": "draconicevolution:awakened_core"
                },
                {
                    "item": "draconicevolution:draconic_energy_core"
                },
                {
                    "item": "draconicevolution:awakened_core"
                },
                {
                    "item": "draconicevolution:draconic_energy_core"
                },
                {
                    "item": "gtceu:double_awakened_draconium_plate"
                },
                {
                    "item": "gtceu:double_awakened_draconium_plate"
                },
                {
                    "tag": "gtceu:circuits/zpm"
                }

            ]
        }
    ).id("draconicevolution:tools/draconic_capacitato")
    event.remove({ id: "draconicevolution:tools/draconic_capacitor"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:wyvern_capacitor"
            },
            "catalyst": {
                "item": "draconicevolution:wyvern_core"
            },
            "total_energy": 8000000,
            "tier": "WYVERN",
            "ingredients": [
                {
                    "item": "draconicevolution:wyvern_energy_core"
                },
                {
                    "item": "gtceu:double_draconium_plate"
                },
                {
                    "item": "draconicevolution:wyvern_energy_core"
                },
                {
                    "item": "draconicevolution:wyvern_core"
                },
                {
                    "item": "draconicevolution:wyvern_energy_core"
                },
                {
                    "item": "gtceu:double_draconium_plate"
                },
                {
                    "item": "draconicevolution:wyvern_energy_core"
                },
                {
                    "tag": "gtceu:circuits/ev"
                }

            ]
        }
    ).id("draconicevolution:tools/wyvern_capacitato")
    event.remove({ id: "draconicevolution:tools/wyvern_capacitor"})

    event.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
                "item": "draconicevolution:chaotic_capacitor"
            },
            "catalyst": {
                "item": "draconicevolution:draconic_capacitor"
            },
            "total_energy": 128000000,
            "tier": "CHAOTIC",
            "ingredients": [
                {
                    "item": "draconicevolution:chaotic_energy_core"
                },
                {
                    "item": "draconicevolution:chaotic_core"
                },
                {
                    "item": "draconicevolution:chaotic_energy_core"
                },
                {
                    "item": "draconicevolution:chaotic_core"
                },
                {
                    "item": "draconicevolution:chaotic_energy_core"
                },
                {
                    "item": "gtceu:double_unstable_draconium_plate"
                },
                {
                    "item": "gtceu:double_unstable_draconium_plate"
                },
                {
                    "tag": "gtceu:circuits/uv"
                }

            ]
        }
    ).id("draconicevolution:tools/chaotic_capacitato")
    event.remove({ id: "draconicevolution:tools/chaotic_capacitor"})

    event.recipes.gtceu.packer("pack_chaos_frag3")
        .itemInputs("1x draconicevolution:large_chaos_frag")
        .itemOutputs("9x draconicevolution:medium_chaos_frag")
        .circuit(9)
        .duration(10)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.packer("pack_chaos_frag2")
        .itemInputs("1x draconicevolution:medium_chaos_frag")
        .itemOutputs("9x draconicevolution:small_chaos_frag")
        .circuit(9)
        .duration(10)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.packer("pack_chaos_frag1")
        .itemInputs("1x draconicevolution:chaos_shard")
        .itemOutputs("9x draconicevolution:large_chaos_frag")
        .circuit(9)
        .duration(10)
        .EUt(GTValues.VA[GTValues.LV])

})

}
    
    
    