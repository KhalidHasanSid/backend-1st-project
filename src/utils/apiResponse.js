class apiResponse {
    constructor(stausCode ,data,message="success"){
        this.statusCode=stausCode;
        this.data=data
        this.message=message
        this.success=statuscode<400
    }
}