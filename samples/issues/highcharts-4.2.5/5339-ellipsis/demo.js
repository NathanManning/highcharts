

QUnit.test('Ellipsis', function (assert) {

    var chart = Highcharts.chart('container', {
        "yAxis": {
            "title": {
                "text": null
            }
        },
        "title": {
            "text": "Between 10 and 100 times"
        },
        "chart": {
            "type": "bar",
            "height": 400,
            "width": 400
        },
        "credits": {
            "enabled": false
        },
        "plotOptions": {
            "bar": {
                "dataLabels": {
                    "enabled": true
                }
            }
        },
        "series": [{
            "data": [{
                "y": 99,
                "x": 0,
                "color": "#B6B6F2"
            }, {
                "y": 99,
                "x": 1,
                "color": "#AFE4FD"
            }, {
                "y": 98,
                "x": 2,
                "color": "#B6B6F2"
            }, {
                "y": 95,
                "x": 3,
                "color": "#DBDBDB"
            }, {
                "y": 95,
                "x": 4,
                "color": "#B6B6F2"
            }, {
                "y": 95,
                "x": 5,
                "color": "#AFE4FD"
            }, {
                "y": 92,
                "x": 6,
                "color": "#B6B6F2"
            }, {
                "y": 91,
                "x": 7,
                "color": "#AFE4FD"
            }, {
                "y": 91,
                "x": 8,
                "color": "#DBDBDB"
            }, {
                "y": 90,
                "x": 9,
                "color": "#DBDBDB"
            }, {
                "y": 89,
                "x": 10,
                "color": "#AFE4FD"
            }, {
                "y": 88,
                "x": 11,
                "color": "#AFE4FD"
            }, {
                "y": 88,
                "x": 12,
                "color": "#DBDBDB"
            }, {
                "y": 87,
                "x": 13,
                "color": "#B6B6F2"
            }, {
                "y": 87,
                "x": 14,
                "color": "#AFE4FD"
            }, {
                "y": 85,
                "x": 15,
                "color": "#AFE4FD"
            }, {
                "y": 83,
                "x": 16,
                "color": "#AFE4FD"
            }, {
                "y": 82,
                "x": 17,
                "color": "#DBDBDB"
            }, {
                "y": 82,
                "x": 18,
                "color": "#B6B6F2"
            }, {
                "y": 82,
                "x": 19,
                "color": "#AFE4FD"
            }, {
                "y": 82,
                "x": 20,
                "color": "#AFE4FD"
            }, {
                "y": 80,
                "x": 21,
                "color": "#AFE4FD"
            }, {
                "y": 79,
                "x": 22,
                "color": "#DBDBDB"
            }, {
                "y": 79,
                "x": 23,
                "color": "#AFE4FD"
            }, {
                "y": 78,
                "x": 24,
                "color": "#B6B6F2"
            }, {
                "y": 78,
                "x": 25,
                "color": "#AFE4FD"
            }, {
                "y": 75,
                "x": 26,
                "color": "#DBDBDB"
            }, {
                "y": 75,
                "x": 27,
                "color": "#DBDBDB"
            }, {
                "y": 75,
                "x": 28,
                "color": "#DBDBDB"
            }, {
                "y": 75,
                "x": 29,
                "color": "#DBDBDB"
            }, {
                "y": 75,
                "x": 30,
                "color": "#DBDBDB"
            }, {
                "y": 75,
                "x": 31,
                "color": "#DBDBDB"
            }, {
                "y": 73,
                "x": 32,
                "color": "#B6B6F2"
            }, {
                "y": 71,
                "x": 33,
                "color": "#AFE4FD"
            }, {
                "y": 70,
                "x": 34,
                "color": "#FFB31A"
            }],
            "name": "Requests"
        }],
        "xAxis": {
            "categories": ["cgi-bin/php?%2D%64+%61%6C%6C%6F%77%5F%75%72%6C%5F%69%6E%63%6C%75%64%65%3D%6F%6E+%2D%64+%73%61%66%65%5F%6D%6F%64%65%3D%6F%66%66+%2D%64+%73%75%68%6F%73%69%6E%2E%73%69%6D%75%6C%61%74%69%6F%6E%3D%6F%6E+%2D%64+%64%69%73%61%62%6C%65%5F%66%75%6E%63%74%69%6F%6E%73%3D%22%22+%2D%64+%6F%70%65%6E%5F%62%61%73%65%64%69%72%3D%6E%6F%6E%65+%2D%64+%61%75%74%6F%5F%70%72%65%70%65%6E%64%5F%66%69%6C%65%3D%70%68%70%3A%2F%2F%69%6E%70%75%74+%2D%64+%63%67%69%2E%66%6F%72%63%65%5F%72%65%64%69%72%65%63%74%3D%30+%2D%64+%63%67%69%2E%72%65%64%69%72%65%63%74%5F%73%74%61%74%75%73%5F%65%6E%76%3D%30+%2D%6E", "phpadmin/scripts/setup.php", "w00tw00t.at.blackhats.romanian.anti-sec:)", "cgi-bin/env.cgi", "cgi-bin/forum.cgi", "cgi-bin/login.cgi", "cgi-bin/sat-ir-web.pl", "cgi-bin/test-cgi.pl", "cgi-sys/php5", "SQLiteManager-1.2.4/main.php", "sqlitemanager/main.php", "SQlite/main.php", "SQLiteManager/main.php", "cgi-bin/php5?%2D%64+%61%6C%6C%6F%77%5F%75%72%6C%5F%69%6E%63%6C%75%64%65%3D%6F%6E+%2D%64+%73%61%66%65%5F%6D%6F%64%65%3D%6F%66%66+%2D%64+%73%75%68%6F%73%69%6E%2E%73%69%6D%75%6C%61%74%69%6F%6E%3D%6F%6E+%2D%64+%64%69%73%61%62%6C%65%5F%66%75%6E%63%74%69%6F%6E%73%3D%22%22+%2D%64+%6F%70%65%6E%5F%62%61%73%65%64%69%72%3D%6E%6F%6E%65+%2D%64+%61%75%74%6F%5F%70%72%65%70%65%6E%64%5F%66%69%6C%65%3D%70%68%70%3A%2F%2F%69%6E%70%75%74+%2D%64+%63%67%69%2E%66%6F%72%63%65%5F%72%65%64%69%72%65%63%74%3D%30+%2D%64+%63%67%69%2E%72%65%64%69%72%65%63%74%5F%73%74%61%74%75%73%5F%65%6E%76%3D%30+%2D%6E", "cgi-bin/bash", "cgi-bin/contact.cgi", "cgi-bin/defaultwebpage.cgi", "cgi-bin/hello.cgi", "cgi-bin/index.cgi", "cgi-bin/recent.cgi", "cgi-bin/tools/tools.pl", "cgi-bin/php-cgi?%2D%64+%61%6C%6C%6F%77%5F%75%72%6C%5F%69%6E%63%6C%75%64%65%3D%6F%6E+%2D%64+%73%61%66%65%5F%6D%6F%64%65%3D%6F%66%66+%2D%64+%73%75%68%6F%73%69%6E%2E%73%69%6D%75%6C%61%74%69%6F%6E%3D%6F%6E+%2D%64+%64%69%73%61%62%6C%65%5F%66%75%6E%63%74%69%6F%6E%73%3D%22%22+%2D%64+%6F%70%65%6E%5F%62%61%73%65%64%69%72%3D%6E%6F%6E%65+%2D%64+%61%75%74%6F%5F%70%72%65%70%65%6E%64%5F%66%69%6C%65%3D%70%68%70%3A%2F%2F%69%6E%70%75%74+%2D%64+%63%67%69%2E%66%6F%72%63%65%5F%72%65%64%69%72%65%63%74%3D%30+%2D%64+%63%67%69%2E%72%65%64%69%72%65%63%74%5F%73%74%61%74%75%73%5F%65%6E%76%3D%30+%2D%6E", "cgi-bin/php.cgi?%2D%64+%61%6C%6C%6F%77%5F%75%72%6C%5F%69%6E%63%6C%75%64%65%3D%6F%6E+%2D%64+%73%61%66%65%5F%6D%6F%64%65%3D%6F%66%66+%2D%64+%73%75%68%6F%73%69%6E%2E%73%69%6D%75%6C%61%74%69%6F%6E%3D%6F%6E+%2D%64+%64%69%73%61%62%6C%65%5F%66%75%6E%63%74%69%6F%6E%73%3D%22%22+%2D%64+%6F%70%65%6E%5F%62%61%73%65%64%69%72%3D%6E%6F%6E%65+%2D%64+%61%75%74%6F%5F%70%72%65%70%65%6E%64%5F%66%69%6C%65%3D%70%68%70%3A%2F%2F%69%6E%70%75%74+%2D%64+%63%67%69%2E%66%6F%72%63%65%5F%72%65%64%69%72%65%63%74%3D%30+%2D%64+%63%67%69%2E%72%65%64%69%72%65%63%74%5F%73%74%61%74%75%73%5F%65%6E%76%3D%30+%2D%6E", "cgi-bin/php4?%2D%64+%61%6C%6C%6F%77%5F%75%72%6C%5F%69%6E%63%6C%75%64%65%3D%6F%6E+%2D%64+%73%61%66%65%5F%6D%6F%64%65%3D%6F%66%66+%2D%64+%73%75%68%6F%73%69%6E%2E%73%69%6D%75%6C%61%74%69%6F%6E%3D%6F%6E+%2D%64+%64%69%73%61%62%6C%65%5F%66%75%6E%63%74%69%6F%6E%73%3D%22%22+%2D%64+%6F%70%65%6E%5F%62%61%73%65%64%69%72%3D%6E%6F%6E%65+%2D%64+%61%75%74%6F%5F%70%72%65%70%65%6E%64%5F%66%69%6C%65%3D%70%68%70%3A%2F%2F%69%6E%70%75%74+%2D%64+%63%67%69%2E%66%6F%72%63%65%5F%72%65%64%69%72%65%63%74%3D%30+%2D%64+%63%67%69%2E%72%65%64%69%72%65%63%74%5F%73%74%61%74%75%73%5F%65%6E%76%3D%30+%2D%6E", "scripts/setup.php"],
            "title": {
                "text": null
            }
        },
        "legend": {
            "enabled": false
        }
    });

    assert.ok(
        chart.plotLeft < 200,
        'Categories do not take over chart'
    );
});