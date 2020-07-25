
const { __, setLocaleData } = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

const {
	SelectControl,
	PanelBody,
	CheckboxControl,
} = wp.components;

const {
	InspectorControls,
	RichText,
	PanelColorSettings,
} = wp.blockEditor;

// Available alert types for a dropdown setting.
const stickyTypes = [
	{ value: 'no-sticky', label: __( 'No Sticky', 'pattonwebz-cta-bar' ) },
	{ value: 'stick-to-top', label: __( 'Sticky Top', 'pattonwebz-cta-bar' ) },
	{ value: 'stick-to-bottom', label: __( 'Sticky Bottom', 'pattonwebz-cta-bar' ) },
];

registerBlockType (
  'pattonwebz/cta-bar', {
		title: __( 'CTA Bar', 'pattonwebz-cta-bar'  ),
		description: __( 'CTA Bar', 'pattonwebz-cta-bar' ),
		category: 'layout',
		icon: {
			src: 'minus',
			background: '#f26535',
			foreground: '#ffffff',
		},

		attributes: {

			stickyType: {
				type: 'string',
				default: 'no-sticky'
			},
			content: {
				type: 'string',
				default: '',
			},
			dismiss: {
				type: 'Boolean',
				default: true
			},
			bgColor: {
				type: 'string',
			},
			textColor: {
				type: 'string',
			},

		},

    edit: props => {
      const { attributes: { stickyType, content, dismiss, bgColor, textColor }, setAttributes } = props;
			const backgroundStyle = {
				backgroundColor: bgColor
			};
			const textStyle = {
				color: textColor
			};
			return ([
    			<InspectorControls>
    				<PanelBody>
    					<SelectControl
    						label    = { __( 'Please select the type of alert you want to display.', 'pattonwebz-cta-bar' ) }
    						options  = { stickyTypes }
  							value    = { stickyType }
  							onChange = { stickyType => { setAttributes( { stickyType } ) } }
    					/>
    				</PanelBody>
					<PanelBody>
						<CheckboxControl
							heading  = { __( 'Please select if the notice should be dismissible.', 'pattonwebz-cta-bar' ) }
							label    = { __( 'Dismissible notice?', 'pattonwebz-cta-bar' ) }
							help     = { __( 'Show an "x" and allow users to close this alert.', 'pattonwebz-cta-bar' ) }
							checked  = { dismiss }
							onChange = { dismiss => { setAttributes( { dismiss } ) } }
						/>
					</PanelBody>
					<PanelBody>
						<PanelColorSettings
							title={ __( 'Color select', 'pattonwebz-cta-bar' ) }
							colorSettings={
                [
                  {
                      value: bgColor,
                      onChange: ( bgColor ) => setAttributes( { bgColor } ),
                      label: __( 'Background Color', 'pattonwebz-cta-bar' ),
                  },
                  {
                      value: textColor,
                      onChange: ( textColor ) => setAttributes( { textColor } ),
                      label: __( 'Text Color', 'pattonwebz-cta-bar' ),
                  },
                ]
              }
						/>
					</PanelBody>
    			</InspectorControls>,
				<div className={ "pwwp--cta-bar pwwp--cta-bar--" + stickyType } style={ backgroundStyle } role="alert">
					<div className="pwwp--cta-bar--inner" style={ textStyle } >
						<RichText
							tagName = "span"
							className = "content"
							value = { content }
							onChange = { ( content ) => setAttributes( { content } ) }
							placeholder = 'Add text...'
							format="string"
              preserveWhiteSpace="true"
						/>
						{ dismiss === true ? <span className="close" aria-hidden="true" >&times;</span> : null }
					</div>
	   			</div>
    		]);
        },
        save: props => {
        	const { attributes: { stickyType, content, dismiss, bgColor, textColor } } = props;
			const backgroundStyle = {
				backgroundColor: bgColor
			};
			const textStyle = {
				color: textColor
			};

		  return (
     		<div className={ "pwwp--cta-bar pwwp--cta-bar--" + stickyType } style={ backgroundStyle } role="alert">
    			<div className="pwwp--cta-bar--inner" style={ textStyle } >
    				<RichText.Content tagname="span" value={content} preserveWhiteSpace="true" />
       			{ dismiss === true ? <button type="button" className="close" data-dismiss="pwwp-ctabar" aria-label="Close" onClick="clearBlock(this)"><span aria-hidden="true">&times;</span></button> : null }
    			</div>
    		</div>
     	);
    },
		supports: {
	    align: [ 'full' ],
	  },
	}
);
