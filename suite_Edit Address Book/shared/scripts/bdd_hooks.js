// This file contains hook functions to run as the .feature file is executed.
//
// A common use-case is to use the OnScenarioStart/OnScenarioEnd hooks to
// start and stop an AUT, e.g.
//
// OnScenarioStart(function(context) {
//     startApplication("addressbook");
// });
//
// OnScenarioEnd(function(context) {
//     currentApplicationContext().detach();
// });
//
// For the complete reference to this and similar available APIs
// (OnFeatureStart/OnFeatureEnd, OnStepStart/OnStepEnd) see the section
// 'Performing Actions During Test Execution Via Hooks' in the Squish manual:
//
// https://doc.froglogic.com/squish/latest/api.bdt.functions.html#api.bdt.functions.hooks

// Detach (i.e. potentially terminate) all AUTs at the end of a scenario
OnScenarioEnd(function(context) {
    applicationContextList().forEach(function(ctx) { ctx.detach(); });
});

