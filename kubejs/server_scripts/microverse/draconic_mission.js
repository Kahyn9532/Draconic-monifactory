ServerEvents.recipes(event => {
    microverse_mission(event, 8, 3, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                "8x kubejs:quantum_flux",
                "16x gtceu:dilithium_gem",
                "4x kubejs:dragon_lair_data"
            )
            .itemOutputs(
                "4x draconicevolution:chaos_shard",
                "16x draconicevolution:dragon_heart"
            )
    })
})