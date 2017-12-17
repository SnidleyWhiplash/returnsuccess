import * as $ from 'jquery';
declare const navProperties: any;

$(function() {
    $("#header-placeholder").load("_header.html", function() {
        $("#nav-placeholder").load(navProperties.mainNav, function() {
            $(".nav-item").removeClass("active");
            $(`#${navProperties.currentSection}-link`).addClass("active");
        });
    });

    /* login.html *************************************************************** */
    $("#loginUsernameRetrieve").on("click", function() {
        $("#loginLoginRegisterPanel").hide();
        $("#loginRecoverDetailsPanel").show();
    });
    $("#loginPasswordRetrieve").on("click", function() {
        $("#loginLoginRegisterPanel").hide();
        $("#loginRecoverDetailsPanel").show();
    });
    $("#loginCloseRecover").on("click", function() {
        $("#loginRecoverDetailsPanel").hide();
        $("#loginLoginRegisterPanel").show();
    });
    $("#loginRegisterBtn").on("click", function() {
        $("#loginLoginRegisterPanel").hide();
        $("#loginRegisterNewPanel").css("display", "flex");
    });
    $("#loginCloseRegisterBtn").on("click", function() {
        $("#loginRegisterNewPanel").hide();
        $("#loginLoginRegisterPanel").show();
    });
    /* tracker.html *************************************************************** */
    $("#trackerSearchExercises").click(function() {
        $("#trackerSearchDatabaseDiv").show();
        $("#trackerSelectDropdownDiv").hide();
        $("#trackerCountFields").show();
    });
    $("#trackerSelectExercises").click(function() {
        $("#trackerSelectDropdownDiv").show();
        $("#trackerSearchDatabaseDiv").hide();
        $("#trackerCountFields").show();
    });
});