GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("unstable_draconium")
        .ingot().fluid().dust()
        .color(0xE13661)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_GEAR)
        .iconSet("dull")
    
    event.create("draconium")
        .ingot().fluid().dust()
        .color(0x7200BF)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_GEAR)
        .iconSet("dull")
    
    event.create("awakened_draconium")
        .ingot().fluid().dust()
        .color(0xF56F27)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_GEAR)
        .iconSet("dull")
    })