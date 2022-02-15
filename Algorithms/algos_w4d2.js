function contains(val) {
    var runner = this.head;
    while(runner.next!=null){
        if(runner.value==val){
            return true;
        }
        runner=runner.next;
    }
    if(runner.value==val){
        return true;
    }
    return false;
}
