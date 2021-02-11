
var XMagicSize = {
    'Raw_Width' : 0,
    'Container' : '',
    'init' : function( _Raw_Width, _Container ) {
        this.Raw_Width = _Raw_Width;
        this.Container = _Container;
    },
    'run' : function() {
        //alert( document.documentElement.clientWidth );
        var xs = document.documentElement.clientWidth / this.Raw_Width;
        $(this.Container).find('*').each( function() {
            var br = parseInt( $(this).attr('br') );
            if( $.isNumeric( br ) ) {
                $(this).css('border-radius', parseInt( br * xs ) + 'px' );
            }
            var lh = parseInt( $(this).attr('lh') );
            if( $.isNumeric( lh ) ) {
                $(this).css('line-height', parseInt( lh * xs ) + 'px' );
            }
            var fs = parseInt( $(this).attr('fs') );
            if( $.isNumeric( fs ) ) {
                $(this).css('font-size', parseInt( fs * xs ) + 'px' );
            }

            var rp = parseInt( $(this).attr('rp') );
            if( $.isNumeric( rp ) ) {
                $(this).css('padding', parseInt( rp * xs ) + 'px' );
            }

            var pl = parseInt( $(this).attr('pl') );
            if( $.isNumeric( pl ) ) {
                $(this).css('padding-left', parseInt( pl * xs ) + 'px' );
            }

            var pt = parseInt( $(this).attr('pt') );
            if( $.isNumeric( pt ) ) {
                $(this).css('padding-top', parseInt( pt * xs ) + 'px' );
            }

            var pr = parseInt( $(this).attr('pr') );
            if( $.isNumeric( pr ) ) {
                $(this).css('padding-right', parseInt(  pr * xs ) + 'px' );
            }

            var pb = parseInt( $(this).attr('pb') );
            if( $.isNumeric( pb ) ) {
                $(this).css('padding-bottom', parseInt( pb * xs ) + 'px' );
            }

            var rm = parseInt( $(this).attr('rm') );
            if( $.isNumeric( rm ) ) {
                $(this).css('margin', parseInt( rm * xs ) + 'px' );
            }

            var ml = parseInt( $(this).attr('ml') );
            if( $.isNumeric( ml ) ) {
                $(this).css('margin-left', parseInt( ml * xs ) + 'px');
            }

            var mt = parseInt( $(this).attr('mt') + 'px' );
            if( $.isNumeric( mt ) ) {
                $(this).css('margin-top', parseInt( mt * xs ) + 'px' );
            }

            var mr = parseInt( $(this).attr('mr') );
            if( $.isNumeric( mr ) ) {
                $(this).css('margin-right', parseInt( mr * xs ) + 'px' );
            }

            var mb = parseInt( $(this).attr('mb') );
            if( $.isNumeric( mb ) ) {
                $(this).css('margin-bottom', parseInt( mb * xs ) + 'px' );
            }

            var rw = parseInt( $(this).attr('rw') );
            if( $.isNumeric( rw ) ) {
                $(this).css('width', parseInt( rw * xs ) + 'px' );
            }

            var rh = parseInt( $(this).attr('rh') );
            if( $.isNumeric( rh ) ) {
                $(this).css('height', parseInt( rh * xs ) + 'px' );
            }

            var rl = parseInt( $(this).attr('rl') );
            if( $.isNumeric( rl ) ) {
                $(this).css('left', parseInt( rl * xs ) + 'px' );
            }

            var rt = parseInt( $(this).attr('rt') );
            if( $.isNumeric( rt ) ) {
                $(this).css('top', parseInt( rt * xs ) + 'px' );
            }

            var rr = parseInt( $(this).attr('rr') );
            if( $.isNumeric( rr ) ) {
                $(this).css('right', parseInt( rr * xs ) + 'px' );
            }

            var rb = parseInt( $(this).attr('rb') );
            if( $.isNumeric( rb ) ) {
                $(this).css('bottom', parseInt(  rb * xs ) + 'px' );
            }

            //----------------------------------------------
            var ls = parseInt( $(this).attr('ls') );
            if( $.isNumeric( ls ) ) {
                $(this).css('letter-spacing', parseInt( ls * xs ) + 'px' );
            }

            //百分比
            var bsw = parseInt( $(this).attr('bsw') );
            var bsh = parseInt( $(this).attr('bsh') );
            if( $.isNumeric( bsw ) || $.isNumeric( bsh )  ) {
                bsw = $.isNumeric( bsw ) ? parseInt( bsw * xs ) + '%' : 'auto';
                bsh = $.isNumeric( bsh ) ? parseInt( bsw * xs ) + '%' : 'auto';
                console.log( 'bsw=' + bsw );
                console.log( 'bsh=' + bsh );
                $(this).css('background-size', bsw + ' ' + bsh );
            }

            //4个角 分开圆角处理
            var btlr = parseInt( $(this).attr('btlr') ); //border-top-left-radius
            if( $.isNumeric( btlr ) ) {
                $(this).css('border-top-left-radius', parseInt( btlr * xs ) + 'px' );
            }
            var btrr = parseInt( $(this).attr('btrr') ); //border-top-right-radius
            if( $.isNumeric( btrr ) ) {
                $(this).css('border-top-right-radius', parseInt( btrr * xs ) + 'px' );
            }
            var bblr = parseInt( $(this).attr('bblr') ); //border-bottom-left-radius
            if( $.isNumeric( bblr ) ) {
                $(this).css('border-bottom-left-radius', parseInt( bblr * xs ) + 'px' );
            }
            var bbrr = parseInt( $(this).attr('bbrr') ); //border-bottom-right-radius
            if( $.isNumeric( bbrr ) ) {
                $(this).css('border-bottom-right-radius', parseInt( bbrr * xs ) + 'px' );
            }

            var bgimg = $(this).attr('bgimg');
            if( bgimg != '' ) {
                $(this).css('background-image', bgimg );
            }
            
            //像素
            var bgwpx = $(this).attr('bgwpx');
            var bghpx = $(this).attr('bghpx');
            if( $.isNumeric( bgwpx ) || $.isNumeric( bghpx ) ) {
                var strw = $.isNumeric( bgwpx ) ? parseInt( bgwpx * xs ).toString() + 'px' : 'auto'; 
                var strh = $.isNumeric( bghpx ) ? parseInt( bghpx * xs ).toString() + 'px' : 'auto';
                $(this).css('background-size', strw + ' ' + strh );
            }

            var bglpx = $(this).attr('bglpx');
            var bgtpx = $(this).attr('bgtpx');
            var strl, strt;
            if( bglpx || bgtpx ) {
                if( $.isNumeric( bglpx ) ) {
                    strl = parseInt( bglpx * xs ) + 'px'; 
                } else {
                    strl = bglpx; 
                }
                if( $.isNumeric( bgtpx ) ) {
                    strt = parseInt( bgtpx * xs ) + 'px'; 
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
            var maxh = $(this).attr('rh-max');
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
            var rbw = parseInt( $(this).attr('rbw') );
            if( $.isNumeric( rbw ) ) {
                $(this).css('border-width', parseInt( rbw * xs ) + 'px' );
            }

            //多列宽度
            var cgap = parseInt( $(this).attr('cgap') );
            if( $.isNumeric( cgap ) ) {
                $(this).css('-moz-column-gap', parseInt( cgap * xs ) + 'px' );
                $(this).css('-webkit-column-gap', parseInt( cgap * xs ) + 'px' );
                $(this).css('column-gap', parseInt( cgap * xs ) + 'px' );
            }

            //属性计算  
            var calcnum = parseInt( $(this).attr('data-calcnum') );
            if( $.isNumeric( calcnum ) ) {
                for( var i=0; i<calcnum; i++ ) {
                    var attrname = 'data-calc' + i;
                    var v = parseInt( $(this).attr(attrname) );
                    if( $.isNumeric( calcnum ) ) {
                        $(this).attr( attrname, v * xs );
                    }
                }
            }

            


        } );
    },
    'calc' : function( val ) {
        var xs = document.documentElement.clientWidth / this.Raw_Width;
        return parseInt( val * xs );
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
        styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        var st = name + ' {';
        
        var attrmap = {
            'data-width'    : 'width',
            'data-height'   : 'height',
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
            'none' : ''
        };
        for( k in attrmap ) {
            if( k == 'none' )  continue;
            var val = el.attr(k);    
            if( typeof( val ) != 'undefined' ) {
                if( val.toString().indexOf('%') != -1 ) {
                    st += attrmap[k] + ' : ' + parseInt( val ) * xs + "%;\n";
                } else if( $.isNumeric( val ) ) {
                    st += attrmap[k] + ' : ' + parseInt( val ) * xs + "px;\n";
                } else {
                    st += attrmap[k] + ' : ' + val + "\n";
                }
            }
        }

        //background-size
        var bgw='', bgh='';
        var bg_size_w = el.attr('data-bgsize-w');
        var bg_size_h = el.attr('data-bgsize-h');
        if(  typeof( bg_size_w ) != 'undefined' && typeof( bg_size_h ) != 'undefined' ) {
            if( bg_size_w.toString().indexOf('%') != -1 ) {
                bgw = parseInt( bg_size_w ) * xs + "%";
            } else if( $.isNumeric( bg_size_w ) ) {
                bgw = parseInt( bg_size_w ) * xs + "px";
            } else {
                bgw = bg_size_w;
            }    
        
            if( bg_size_h.toString().indexOf('%') != -1 ) {
                bgh = parseInt( bg_size_h ) * xs + "%";
            } else if( $.isNumeric( bg_size_h ) ) {
                bgh = parseInt( bg_size_h ) * xs + "px";
            } else {
                bgh = bg_size_h;
            }    
            st += 'background-size: ' + bgw + ' ' + bgh + ";\n";
        }
        
        //background-position
        var bgpw='', bgph='';
        var bg_pos_w = el.attr('data-bgpos-w');
        var bg_pos_h = el.attr('data-bgpos-h');
        if(  typeof( bg_pos_w ) != 'undefined' && typeof( bg_pos_h ) != 'undefined' ) {
            if( bg_pos_w.toString().indexOf('%') != -1 ) {
                bgpw = parseInt( bg_pos_w ) * xs + "%";
            } else if( $.isNumeric( bg_pos_w ) ) {
                bgpw = parseInt( bg_pos_w ) * xs + "px";
            } else {
                bgpw = bg_pos_w;
            }   
            
            if( bg_pos_h.toString().indexOf('%') != -1 ) {
                bgph = parseInt( bg_pos_h ) * xs + "%";
            } else if( $.isNumeric( bg_pos_h ) ) {
                bgph = parseInt( bg_pos_h ) * xs + "px";
            } else {
                bgph = bg_pos_h;
            }
            st += 'background-position: ' + bgpw + ' ' + bgph + ";\n";
        }

        st += '}';
        styleElement.appendChild( document.createTextNode( st ) );
        document.getElementsByTagName('head')[0].appendChild( styleElement );
    }



};
