dmaf.once("load_stateProcessor", function (DMAF) {
    var type = "stateProcessor",
        IN = "in",
        PREVIOUS = "PREVIOUS";

    function State (properties) {
        this.value = undefined;
        this.previous = undefined;
    }
    State.prototype = Object.create(DMAF.InstancePrototype, {
        onAction: {
            value: function (trigger, actionTime, eventProperties, actionProperties) {
                var value, i, ii, j, jj;
                for (i = 0, ii = this.stateMaps.length; i < ii; i++) {
                    for (j = 0, jj = this.stateMaps[i][IN].length; j < jj; j++) {
                        if (this.stateMaps[i][IN][j] === trigger) {
                            value = this.stateMaps[i].state;
                            i = ii; j = jj;
                        }
                    }
                }
                if (!value) {
                    console.log(this.stateMaps);
                    return console.log("StateProcesor: No state found for", trigger);
                }
                if (value === PREVIOUS) {
                    value = this.previous;
                }
                switch (this.update) {
                    case "always":
                        this.previous = this.value;
                        this.value = value;
                        break;
                    case "onChange":
                        if (value !== this.value) {
                            this.previous = this.value;
                            this.value = value;
                        }
                }
            }
        }
    });
    DMAF.registerInstance(type, "State", State);
});