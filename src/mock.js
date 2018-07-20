define(["can/util/fixture/fixture"], function (fixture) {
    var singelTask={
        "@odata.context":"as",
        "@odata.id": "/redfish/v1/rich/Tasks/uuid1",
        "@odata.type":"#Task.Task",
        "Name":"GPUI",
        "Id":"1",
        "Description":"string",
        "TaskType":"OSInstall",
        "SourceID":"1111-2222",
        "ParentID":"",
        "CreateTime":"2000-03-02T11:09+00:00",
        "UpdatedTime":"2000-03-02T11:09+00:00",
        "EndTime":"",
        "RelateURI":"/redfish/v1",
        "Status":"Preparing",
        "Progress":40,
        "DetailInfo":"prepare to start",
        "Owner":"123"
    };
    var twoTask={
        "@odata.context":"as",
        "@odata.id": "/redfish/v1/rich/Tasks/uuid1",
        "@odata.type":"#Task.Task",
        "Name":"test",
        "Id":"2",
        "Description":"string",
        "TaskType":"OSInstall",
        "SourceID":"1111-2222",
        "ParentID":"",
        "CreateTime":"2000-03-02T11:09+00:00",
        "UpdatedTime":"2000-03-02T11:09+00:00",
        "EndTime":"",
        "RelateURI":"/redfish/v1",
        "Status":"Preparing",
        "Progress":40,
        "DetailInfo":"prepare to start",
        "Owner":"123"
    };
    var subTask={
        "@odata.context":"",
        "@odata.id": "/redfish/v1/rich/tasks/{masterUUID}/subtasks",
        "@odata.type":"#Task.Task",
        "Name":"GET Sub Task",
        "Description":"xxx",
        "Members@odata.count":2,
        "Members": [
            {
                "Name":"GPUIFREW1",
                "Id":"3",
                "Description":"string",
                "TaskType":"OSInstall",
                "SourceID":"1111-2222",
                "ParentID":"",
                "CreateTime":"2000-03-02T11:09+00:00",
                "UpdatedTime":"2000-03-02T11:09+00:00",
                "EndTime":"time",
                "RelateURI":"/redfish/v1",
                "Status":"Progressing",
                "Progress":50,
                "DetailInfo":"prepare to start",
                "Owner":"123",
                "@odata.id": "/redfish/v1/rich/Tasks/{MasterUUID}/SubTasks/{uuid}"
            },
            {
                "Name":"GPUIFREW2",
                "Id":"4",
                "Description":"string",
                "TaskType":"OSInstall",
                "SourceID":"1111-2222",
                "ParentID":"",
                "CreateTime":"2000-03-02T11:09+00:00",
                "UpdatedTime":"2000-03-02T11:09+00:00",
                "EndTime":"time",
                "RelateURI":"/redfish/v1",
                "Status":"Finish",
                "Progress":80,
                "DetailInfo":"prepare to start",
                "Owner":"123",
                "@odata.id": "/redfish/v1/rich/Tasks/{MasterUUID}/SubTasks/{uuid}"
            },
        ],
        "Members@odata.nextlink": "/redfish/v1/rich/Images/Tasks/?$skip=5&$top=5"
    };
    var subtwoTask={
        "@odata.context":"",
        "@odata.id": "/redfish/v1/rich/tasks/{masterUUID}/subtasks",
        "@odata.type":"#Task.Task",
        "Name":"GET Sub Task",
        "Description":"xxx",
        "Members@odata.count":2,
        "Members": [
            {
                "Name":"test1",
                "Id":"5",
                "Description":"string",
                "TaskType":"OSInstall",
                "SourceID":"1111-2222",
                "ParentID":"",
                "CreateTime":"2000-03-02T11:09+00:00",
                "UpdatedTime":"2000-03-02T11:09+00:00",
                "EndTime":"time",
                "RelateURI":"/redfish/v1",
                "Status":"Progressing",
                "Progress":50,
                "DetailInfo":"prepare to start",
                "Owner":"123",
                "@odata.id": "/redfish/v1/rich/Tasks/{MasterUUID}/SubTasks/{uuid}"
            },
            {
                "Name":"test2",
                "Id":"6",
                "Description":"string",
                "TaskType":"OSInstall",
                "SourceID":"1111-2222",
                "ParentID":"",
                "CreateTime":"2000-03-02T11:09+00:00",
                "UpdatedTime":"2000-03-02T11:09+00:00",
                "EndTime":"time",
                "RelateURI":"/redfish/v1",
                "Status":"Finish",
                "Progress":80,
                "DetailInfo":"prepare to start",
                "Owner":"123",
                "@odata.id": "/redfish/v1/rich/Tasks/{MasterUUID}/SubTasks/{uuid}"
            },
        ],
        "Members@odata.nextlink": "/redfish/v1/rich/Images/Tasks/?$skip=5&$top=5"
    };
    fixture({
        "GET /redfish/v1/rich/Tasks/123456789": function (original, response) {
            response(200, "success", singelTask, {})
        },
        "GET /redfish/v1/rich/Tasks/56789": function (original, response) {
            response(200, "success", twoTask, {})
        },
        "GET /redfish/v1/rich/Tasks/123456789/SubTasks": function (original, response) {
            response(200, "success", subTask, {})
        },
        "GET /redfish/v1/rich/Tasks/56789/SubTasks": function (original, response) {
            response(200, "success", subtwoTask, {})
        },
    });
    return fixture;
});
