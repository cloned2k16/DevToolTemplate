//  =================================== --------------------------- ---------------------------------    
    var
        pluginTitle             =   "DevTool context"
    ,   mainPanel    
    ,   debugMode               =   loadGlobal('debugMode'  ,false)
    ,   showPanel               =   loadGlobal('showPanel'  ,false)
    ,   page_info               =   (args)                       => {
        "use strict";
        return {page : 'page info' ,args};
    }
    ,   createEditMethods       =   function ()                     {
        "use strict";
    }
    ;
    
//  =================================== --------------------------- ---------------------------------    
    chrome
        .devtools
        .panels
        .elements
        .createSidebarPane              (pluginTitle                ,function(sidebar)              {
        
        "use strict";
    //  ------------------------------- --------------------------- ---------------------------------            
        function                        updateElements              ()                              {
            sidebar.setExpression("(" + page_info.toString() + ")("+debugMode+")");
              
            chrome.devtools.inspectedWindow.eval("("+createEditMethods.toString()+ ")()");
        }
        
        
        updateElements();                                                                               //  initial call
    //  ------------------------------- --------------------------- ---------------------------------    
        chrome
            .devtools
            .panels
            .elements
            .onSelectionChanged
            .addListener        (updateElements);
    //  ------------------------------- --------------------------- ---------------------------------                
        sidebar 
            .onShown
            .addListener        (updateElements);
    //  ------------------------------- --------------------------- ---------------------------------            
        chrome
            .extension
            .onMessage
            .addListener        (function(request, sender, sendResponse) { updateElements(); });
    });
//  =================================== --------------------------- --------------------------------- 
    if (showPanel) mainPanel            = chrome.devtools.panels.create(
                                                                            "Este DevTool"
                                                                        ,   "/imgs/logo.png"
                                                                        ,   "/pages/panel.html"
                                        );
//  =================================== --------------------------- ---------------------------------    

