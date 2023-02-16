module.exports = {
    sample: {
        "displayName": "Sample function",
        "featuredImg": "https://via.placeholder.com/350x200",
        "description": "VERY short description of this function",
        "ui": {
            "icon": "https://via.placeholder.com/50",
            "menu": "menu location"
        },
        "hotkeys": {
            "pc": "ctrl",
            "mac": "cmd"
        },
        "compatibility": ["galvo"],
        "introduced": "1.0+"
    },
    group: {
        "displayName": "Group",
        "featuredImg": "https://via.placeholder.com/350x200",
        "description": "Collects several objects together so they can be easily selected and moved as one.",
        "ui": {
            "icon": "https://via.placeholder.com/50",
            "menu": "Arrange > Group"
        },
        "hotkeys": {
            "pc": ["ctrl", "G"],
            "mac": ["⌘", "G"]
        },
        "compatibility": ["DSP", "Ruida", "GCode"],
        "introduced": "before 1.0"
    }
}