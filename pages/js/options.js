//  =================================== --------------------------- ---------------------------------    
    var options                 =   true
    ,   idDbgMode               =   'chkDBGM' 
    ,   _debugMode              =   'debugMode'
    ,   idShowPanel             =   'chkSHOWP'
    ,   _showPanel              =   'showPanel'
    ,   elDebugMode             =   _byId(idDbgMode)
    ,   elShowPanel             =   _byId(idShowPanel)
    //  ------------------------------- --------------------------- ---------------------------------    
    ;
//  =================================== --------------------------- ---------------------------------    
    if (loadGlobal(_debugMode,false)) elDebugMode.checked=true;
    if (loadGlobal(_showPanel,false)) elShowPanel.checked=true;
//  =================================== --------------------------- ---------------------------------    
    elDebugMode.onchange = doSave;
    elShowPanel.onchange = doSave;
//  =================================== --------------------------- ---------------------------------    
    
