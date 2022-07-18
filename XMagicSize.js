
var XMagicSize = {
    'Raw_Width' : 0,
    'Container' : '',
    'init' : function( _Raw_Width, _Container ) {
        this.Raw_Width = _Raw_Width;
        this.Container = _Container;
    },
    'run' : function() {
        var xs = ( document.documentElement.clientWidth ) / ( this.Raw_Width );
        $(this.Container).find('*').each( function() {
            var br = parseFloat( $(this).attr('br') );
            if( $.isNumeric( br ) ) {
                $(this).css('border-radius', parseFloat( br * xs ) + 'px' );
            }
            var lh = parseFloat( $(this).attr('lh') );
            if( $.isNumeric( lh ) ) {
                $(this).css('line-height', parseFloat( lh * xs ) + 'px' );
            }
            var fs = parseFloat( $(this).attr('fs') );
            if( $.isNumeric( fs ) ) {
                $(this).css('font-size', parseFloat( fs * xs ) + 'px' );
            }

            var rp = parseFloat( $(this).attr('rp') );
            if( $.isNumeric( rp ) ) {
                $(this).css('padding', parseFloat( rp * xs ) + 'px' );
            }

            var pl = parseFloat( $(this).attr('pl') );
            if( $.isNumeric( pl ) ) {
                $(this).css('padding-left', parseFloat( pl * xs ) + 'px' );
            }

            var pt = parseFloat( $(this).attr('pt') );
            if( $.isNumeric( pt ) ) {
                $(this).css('padding-top', parseFloat( pt * xs ) + 'px' );
            }

            var pr = parseFloat( $(this).attr('pr') );
            if( $.isNumeric( pr ) ) {
                $(this).css('padding-right', parseFloat(  pr * xs ) + 'px' );
            }

            var pb = parseFloat( $(this).attr('pb') );
            if( $.isNumeric( pb ) ) {
                $(this).css('padding-bottom', parseFloat( pb * xs ) + 'px' );
            }

            var rm = parseFloat( $(this).attr('rm') );
            if( $.isNumeric( rm ) ) {
                $(this).css('margin', parseFloat( rm * xs ) + 'px' );
            }

            var ml = parseFloat( $(this).attr('ml') );
            if( $.isNumeric( ml ) ) {
                $(this).css('margin-left', parseFloat( ml * xs ) + 'px');
            }

            var mt = parseFloat( $(this).attr('mt') + 'px' );
            if( $.isNumeric( mt ) ) {
                $(this).css('margin-top', parseFloat( mt * xs ) + 'px' );
            }

            var mr = parseFloat( $(this).attr('mr') );
            if( $.isNumeric( mr ) ) {
                $(this).css('margin-right', parseFloat( mr * xs ) + 'px' );
            }

            var mb = parseFloat( $(this).attr('mb') );
            if( $.isNumeric( mb ) ) {
                $(this).css('margin-bottom', parseFloat( mb * xs ) + 'px' );
            }

            var rw = parseFloat( $(this).attr('rw') );
            if( $.isNumeric( rw ) ) {
                $(this).css('width', parseFloat( rw * xs ) + 'px' );
            }

            var rh = parseFloat( $(this).attr('rh') );
            if( $.isNumeric( rh ) ) {
                $(this).css('height', parseFloat( rh * xs ) + 'px' );
            }

            var rl = parseFloat( $(this).attr('rl') );
            if( $.isNumeric( rl ) ) {
                $(this).css('left', parseFloat( rl * xs ) + 'px' );
            }

            var rt = parseFloat( $(this).attr('rt') );
            if( $.isNumeric( rt ) ) {
                $(this).css('top', parseFloat( rt * xs ) + 'px' );
            }

            var rr = parseFloat( $(this).attr('rr') );
            if( $.isNumeric( rr ) ) {
                $(this).css('right', parseFloat( rr * xs ) + 'px' );
            }

            var rb = parseFloat( $(this).attr('rb') );
            if( $.isNumeric( rb ) ) {
                $(this).css('bottom', parseFloat(  rb * xs ) + 'px' );
            }

            //----------------------------------------------
            var ls = parseFloat( $(this).attr('ls') );
            if( $.isNumeric( ls ) ) {
                $(this).css('letter-spacing', parseFloat( ls * xs ) + 'px' );
            }

            //百分比
            var bsw = parseFloat( $(this).attr('bsw') );
            var bsh = parseFloat( $(this).attr('bsh') );
            if( $.isNumeric( bsw ) || $.isNumeric( bsh )  ) {
                bsw = $.isNumeric( bsw ) ? parseFloat( bsw * xs ) + '%' : 'auto';
                bsh = $.isNumeric( bsh ) ? parseFloat( bsw * xs ) + '%' : 'auto';
                console.log( 'bsw=' + bsw );
                console.log( 'bsh=' + bsh );
                $(this).css('background-size', bsw + ' ' + bsh );
            }

            //4个角 分开圆角处理
            var btlr = parseFloat( $(this).attr('btlr') ); //border-top-left-radius
            if( $.isNumeric( btlr ) ) {
                $(this).css('border-top-left-radius', parseFloat( btlr * xs ) + 'px' );
            }
            var btrr = parseFloat( $(this).attr('btrr') ); //border-top-right-radius
            if( $.isNumeric( btrr ) ) {
                $(this).css('border-top-right-radius', parseFloat( btrr * xs ) + 'px' );
            }
            var bblr = parseFloat( $(this).attr('bblr') ); //border-bottom-left-radius
            if( $.isNumeric( bblr ) ) {
                $(this).css('border-bottom-left-radius', parseFloat( bblr * xs ) + 'px' );
            }
            var bbrr = parseFloat( $(this).attr('bbrr') ); //border-bottom-right-radius
            if( $.isNumeric( bbrr ) ) {
                $(this).css('border-bottom-right-radius', parseFloat( bbrr * xs ) + 'px' );
            }

            var bgimg = $(this).attr('bgimg');
            if( bgimg != '' ) {
                $(this).css('background-image', bgimg );
            }
            
            //像素
            var bgwpx = $(this).attr('bgwpx');
            var bghpx = $(this).attr('bghpx');
            if( $.isNumeric( bgwpx ) || $.isNumeric( bghpx ) ) {
                var strw = $.isNumeric( bgwpx ) ? parseFloat( bgwpx * xs ).toString() + 'px' : 'auto'; 
                var strh = $.isNumeric( bghpx ) ? parseFloat( bghpx * xs ).toString() + 'px' : 'auto';
                $(this).css('background-size', strw + ' ' + strh );
            }

            var bglpx = $(this).attr('bglpx');
            var bgtpx = $(this).attr('bgtpx');
            var strl, strt;
            if( bglpx || bgtpx ) {
                if( $.isNumeric( bglpx ) ) {
                    strl = parseFloat( bglpx * xs ) + 'px'; 
                } else {
                    strl = bglpx; 
                }
                if( $.isNumeric( bgtpx ) ) {
                    strt = parseFloat( bgtpx * xs ) + 'px'; 
                } else {
                    strt = bgtpx;
                }
                $(this).css('background-position', strl + ' ' + strt);
            }
            

            var bgrepeat = $(this).attr('bgrepeat');
            if( bgrepeat != '' ) {
                $(this).css('background-repeat', bgrepeat );
            }

            var maxw = $(this).attr('rw-max');
            if( $.isNumeric( maxw ) || $.isNumeric( maxw ) ) {
                $(this).css('max-width', maxw * xs + 'px' );
            }
            var maxh = $(this).attr('q');
            if( $.isNumeric( maxh ) || $.isNumeric( maxh ) ) {
                $(this).css('max-height', maxh * xs + 'px' );
            }
            var minw = $(this).attr('rw-min');
            if( $.isNumeric( minw ) || $.isNumeric( minw ) ) {
                $(this).css('min-width', minw * xs + 'px' );
            }
            var minh = $(this).attr('rh-min');
            if( $.isNumeric( minh ) || $.isNumeric( minh ) ) {
                $(this).css('min-height', minh * xs + 'px' );
            }

            //CSS三角形处理
            var trbrw = $(this).attr('trbrw');
            if( $.isNumeric( trbrw ) || $.isNumeric( trbrw ) ) {
                $(this).css('border-right-width', trbrw * xs + 'px' );
            }
            var trblw = $(this).attr('trblw');
            if( $.isNumeric( trblw ) || $.isNumeric( trblw ) ) {
                $(this).css('border-left-width', trblw * xs + 'px' );
            }
            var trbtw = $(this).attr('trbtw');
            if( $.isNumeric( trbtw ) || $.isNumeric( trbtw ) ) {
                $(this).css('border-top-width', trbtw * xs + 'px' );
            }
            var trbbw = $(this).attr('trbbw');
            if( $.isNumeric( trbbw ) || $.isNumeric( trbbw ) ) {
                $(this).css('border-bottom-width', trbbw * xs + 'px' );
            }

            //border-width
            var rbw = parseFloat( $(this).attr('rbw') );
            if( $.isNumeric( rbw ) ) {
                $(this).css('border-width', parseFloat( rbw * xs ) + 'px' );
            }

            //多列宽度
            var cgap = parseFloat( $(this).attr('cgap') );
            if( $.isNumeric( cgap ) ) {
                $(this).css('-moz-column-gap', parseFloat( cgap * xs ) + 'px' );
                $(this).css('-webkit-column-gap', parseFloat( cgap * xs ) + 'px' );
                $(this).css('column-gap', parseFloat( cgap * xs ) + 'px' );
            }

            //属性计算  
            var calcnum = parseFloat( $(this).attr('data-calcnum') );
            if( $.isNumeric( calcnum ) ) {
                for( var i=0; i<calcnum; i++ ) {
                    var attrname = 'data-calc' + i;
                    var v = parseFloat( $(this).attr(attrname) );
                    if( $.isNumeric( calcnum ) ) {
                        $(this).attr( attrname, v * xs );
                    }
                }
            }

            


        } );
    },
    'calc' : function( val ) {
        var xs = document.documentElement.clientWidth / this.Raw_Width;
        return parseFloat( val * xs );
    },
    'tostylesheet' : function( selector ) {
        var xs = document.documentElement.clientWidth / this.Raw_Width;
        var el = $(selector);
        if( el.length == 0 ) {
            return;
        }
        var name = $.trim( el.attr('data-name') );
        if( name.length < 1 ) {
            return;
        }
        
        var st = name + ' {';
        var st = '';
        var attrmap = {
            'data-width'    : 'width',
            'data-maxw'     : 'max-width',
            'data-minw'     : 'min-width',
            'data-height'   : 'height',
            'data-maxh'     : 'max-height',
            'data-minh'     : 'min-height',
            'data-padding'  : 'padding',
            'data-pl'       : 'padding-left',
            'data-pr'       : 'padding-right',
            'data-pt'       : 'padding-top',
            'data-pb'       : 'padding-bottom',
            'data-margin'   : 'margin',
            'data-ml'       : 'margin-left',
            'data-mr'       : 'margin-right',
            'data-mt'       : 'margin-top',
            'data-mb'       : 'margin-bottom',
            'data-lh'       : 'line-height',
            'data-ls'       : 'letter-spacing',
            'data-fs'       : 'font-size',
            'data-rl'       : 'left',
            'data-rr'       : 'right',
            'data-rt'       : 'top',
            'data-rb'       : 'bottom',
            'data-br'       : 'border-radius',
            'data-btlr'     : 'border-top-left-radius',
            'data-btrr'     : 'border-top-right-radius',
            'data-bblr'     : 'border-bottom-left-radius',
            'data-bbrr'     : 'border-bottom-right-radius',
            'data-color'    : 'color',    
            'data-position' : 'position',    
            'data-bgpos'    : 'background-position',   
            'data-bw'       : 'border-width',    
            'none' : ''
        };
        for( k in attrmap ) {
            if( k == 'none' )  continue;
            var val = el.attr(k);    
            if( typeof( val ) != 'undefined' ) {
                if( val.toString().indexOf('%') != -1 ) {
                    st += attrmap[k] + ' : ' + parseFloat( val ) * xs + "%;";
                } else if( $.isNumeric( val ) ) {
                    st += attrmap[k] + ' : ' + parseFloat( val ) * xs + "px;";
                } else {
                    st += attrmap[k] + ' : ' + val + ";";
                }
            }
        }

        //background-size
        var bgw='', bgh='';
        var bg_size_w = el.attr('data-bgsize-w');
        var bg_size_h = el.attr('data-bgsize-h');
        if(  typeof( bg_size_w ) != 'undefined' && typeof( bg_size_h ) != 'undefined' ) {
            if( bg_size_w.toString().indexOf('%') != -1 ) {
                bgw = parseFloat( bg_size_w ) * xs + "%";
            } else if( $.isNumeric( bg_size_w ) ) {
                bgw = parseFloat( bg_size_w ) * xs + "px";
            } else {
                bgw = bg_size_w;
            }    
        
            if( bg_size_h.toString().indexOf('%') != -1 ) {
                bgh = parseFloat( bg_size_h ) * xs + "%";
            } else if( $.isNumeric( bg_size_h ) ) {
                bgh = parseFloat( bg_size_h ) * xs + "px";
            } else {
                bgh = bg_size_h;
            }    
            st += 'background-size: ' + bgw + ' ' + bgh + ";";
        }
        
        //background-position
        var bgpw='', bgph='';
        var bg_pos_w = el.attr('data-bgpos-w');
        var bg_pos_h = el.attr('data-bgpos-h');
        if(  typeof( bg_pos_w ) != 'undefined' && typeof( bg_pos_h ) != 'undefined' ) {
            if( bg_pos_w.toString().indexOf('%') != -1 ) {
                bgpw = parseFloat( bg_pos_w ) * xs + "%";
            } else if( $.isNumeric( bg_pos_w ) ) {
                bgpw = parseFloat( bg_pos_w ) * xs + "px";
            } else {
                bgpw = bg_pos_w;
            }   
            
            if( bg_pos_h.toString().indexOf('%') != -1 ) {
                bgph = parseFloat( bg_pos_h ) * xs + "%";
            } else if( $.isNumeric( bg_pos_h ) ) {
                bgph = parseFloat( bg_pos_h ) * xs + "px";
            } else {
                bgph = bg_pos_h;
            }
            st += 'background-position: ' + bgpw + ' ' + bgph + ";";
        }

        //static css attributes
        var staticcss = el.attr('data-static-css');
        if( staticcss ) {
            st += staticcss; 
        }

        var strid = $.trim( el.attr('data-id') );
        if( typeof( strid ) == 'undefined' || strid == '' || !document.getElementById( strid ) ) {
            var styleElement = document.createElement('style');
            styleElement.type = 'text/css';
            styleElement.id = strid;
            styleElement.appendChild( document.createTextNode( name + ' {' + st + '}' ) );
            document.getElementsByTagName('head')[0].appendChild( styleElement );
        } else {
            var styleElement = document.getElementById( strid ),
                rules = styleElement.sheet.cssRules,
                curst = null;
            for( var i=0; i<rules.length; i++ ) {
                if( rules[i].selectorText == name ) {
                    console.log( 'find exists rules' );
                    curst = rules[i].style;
                }
            }
            var arr = st.split(';');
            for( d in arr ) {
                if( $.trim( arr[d] ).length > 0 ) {
                    var csskv = arr[d].split(':');
                    if( csskv.length == 2 ) {
                        curst[$.trim(csskv[0])] = $.trim(csskv[1]);
                    }
                }
            }
        }
        el.remove();
    }
};
