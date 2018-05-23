'use strict';

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

$(function () {

    /* This is a first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {

        /*
         * This test is for the allFeeds object.
         * Checks whether the allFeeds object has all of the required data.
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('the url is defined and not empty', function () {
            allFeeds.forEach(function (el) {
                expect(el.url).toBeDefined();
                expect(el.url).toBeTruthy();
            });
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('the name is defined and not empty', function () {
            allFeeds.forEach(function (el) {
                expect(el.name).toBeDefined();
                expect(el.name).toBeTruthy();
            });
        });
    });

    /* Test the functionality of the menu
     * and the menu button.
     */
    describe('The menu', function () {
        /* This test checks whether the menu element is
         * hidden by default.
         */
        /* An array in which the matrix of the menu will be stored */
        var matrixArr = [];
        var splitMatrixStr = void 0;

        /* Checks the x value of the matrix of the menu element */
        beforeEach(function (done) {
            matrixArr = [$('.slide-menu').css('transform')];
            splitMatrixStr = matrixArr[0].split(", ");
            done();
        });

        it('menu is hidden by default', function () {
            expect($('body')[0]).toHaveClass('menu-hidden');
            expect(parseInt(splitMatrixStr[4])).toBeLessThan(-190);
        });

        /* This test checks whether the menu changes
         * visibility when the menu icon is clicked.
         */
        it('the menu button shows and hides the menu on click', function (done) {
            /* The click is made on the menu button */
            $('.menu-icon-link').click();
            expect($('.menu-hidden')[0]).not.toBeDefined();
            /* A timeout for the first click, so that animation would have
             * the required time to complete.
             */
            setTimeout(function () {
                matrixArr = [$('.slide-menu').css('transform')];
                splitMatrixStr = matrixArr[0].split(", ");
                expect(parseInt(splitMatrixStr[4])).toBeGreaterThan(-1);
                /* Another click is made on the menu button */
                $('.menu-icon-link').click();
                /* A timeout for the second click, so that animation would have
                 * the required time to complete.
                 */
                setTimeout(function () {
                    expect($('.menu-hidden')[0]).toBeDefined();
                    matrixArr = [$('.slide-menu').css('transform')];
                    splitMatrixStr = matrixArr[0].split(", ");
                    expect(parseInt(splitMatrixStr[4])).toBeLessThan(-190);
                    done();
                }, 310);
            }, 310);
        });
    });

    /* A test suite that handles the initial content of the feed elements */
    describe('Initial Entries', function () {
        /* This test checks when the loadFeed
         * function is called and completes its work, that there is at least
         * a single .entry element.
         */
        beforeEach(function (done) {
            loadFeed(0);
            setTimeout(function () {
                done();
            }, 2000);
        });
        it('there is at least a single .entry element in the feed container', function () {
            expect($('.feed')[0]).toBeDefined();
            expect($('.feed')[0]).toContainElement('article.entry');
        });
    });

    /* A test suite that handles new feeds */
    describe('New Feed Selection', function () {

        /* This test checks whther the content actually changes,
         * when a new feed is loaded
         * by the loadFeed function.
         */
        /* An object that will hold previous feed content
         * and current feed content.
         */
        var hrefArr = {
            prev: [],
            current: []
        };
        var x = 1;
        var p = 0;
        var hrefs = void 0;

        beforeEach(function (done) {
            loadFeed(p);
            setTimeout(function () {
                hrefs = document.querySelector('.feed').children;
                for (var i = 0; i < hrefs.length; i++) {
                    hrefArr.current.push(hrefs[i].href);
                };
                done();
            }, 4000);
        });
        afterEach(function (done) {
            hrefArr.prev = hrefArr.current;
            hrefArr.current = [];
            p++;
            done();
        });
        afterAll(function (done) {
            loadFeed(0);
            done();
        });
        it('the content changed in Udacity Blog', function () {
            expect(hrefArr.current).not.toEqual(hrefArr.prev);
        });
        it('the content changed in Css Tricks', function () {
            expect(hrefArr.current).not.toEqual(hrefArr.prev);
        });
        it('the content changed in HTML5 Rocks', function () {
            expect(hrefArr.current).not.toEqual(hrefArr.prev);
        });
        it('the content changed in Linear Digressions', function () {
            expect(hrefArr.current).not.toEqual(hrefArr.prev);
        });
    });
}());