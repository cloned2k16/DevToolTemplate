//  =================================== --------------------------- ---------------------------------    
    var ND
    ,   _CON                    =   console
    ,   _DOC                    =   document
    ,   _byId                   =   (id)    => { return _DOC.getElementById(id);                    }
    ,   _log                    =   (...a)  => { Function.apply.call(_CON.log     ,_CON,a);         }
    ,   _err                    =   (...a)  => { Function.apply.call(_CON.error   ,_CON,a);         }
    ,   _wrn                    =   (...a)  => { Function.apply.call(_CON.warn    ,_CON,a);         }
    //  ------------------------------- --------------------------- ---------------------------------    
    ,   doSave                  =   (ev)                            =>  {
        var el=ev.srcElement;
        switch (el.id){
            case idDbgMode:
                saveGlobal(_debugMode   ,el.checked);
                break;
            case idShowPanel:
                saveGlobal(_showPanel   ,el.checked);
                break;
            default:
                _wrn('you are not supposed to get here!');
        }
    }    
    //  ------------------------------- --------------------------- ---------------------------------    
    ,   saveGlobal              =   (name,value)                    =>  {
        _log('saving',name,value);
        
        try {
            localStorage[name]=value;
        }
        catch ( e ) {
            _err("Exception:",e);
        }
    }
    ,   loadGlobal              =   (name,dflt)                     =>  {
        try {
            var dbVal   =   localStorage[name];
            if (dbVal)  return JSON.parse(dbVal);
            else        return dflt;
        }
        catch ( e ) {  _err("Exception:",e);
                        return dflt;
        }
    }
    //  ------------------------------- --------------------------- ---------------------------------    
    ;
//  =================================== --------------------------- ---------------------------------    
