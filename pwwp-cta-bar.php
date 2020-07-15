<?php
/**
 * Plugin Name: CTA Bar
 * Description: Add CTA or alert bars to your posts and pages.
 * Author: William Patton
 * Author URI: https://www.pattonwebz.com/
 * Version: 1.0.0-dev
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: cta-bar
 * Network: false
 *
 * Initial version is incorporates code from _Simple Alert Blocks_ by Andrew Lima. Plugin idea is inspired by their original block plugin.
 *
 * @package pattonwebz/cta-bar-block
 */

defined( 'ABSPATH' ) || exit;

/**
 * Register the scripts for the pattonwebz cta bar block.
 *
 * @since  1.0.0
 * @return void
 */
function pwwp_cta_bar_register_files_for_gutenberg() {
	wp_register_script(
		'pwwp-cta-bar-js',
		plugins_url( 'build/index.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor' ),
		'1.0.0-dev',
		false
	);

    wp_register_script(
		'pwwp-cta-bar-clear-block',
		plugins_url( 'src/clearBlock.js', __FILE__ ),
		array( 'pwwp-cta-bar-js' ),
		'1.0.0-dev',
		false
	);

	wp_register_style(
		'pwwp-cta-bar-css',
		plugins_url( 'css/pwwp-cta-bar.css', __FILE__ ),
		array(),
		'1.0.0'
	);

	register_block_type(
		'pattonwebz/cta-bar',
		array(
			'editor_script' => 'pwwp-cta-bar-js',
			'editor_style'  => 'pwwp-cta-bar-css',
		)
	);
}
add_action( 'init', 'pwwp_cta_bar_register_files_for_gutenberg' );

/**
 * Enqueue the script and stylesheet for the pattonwebz cta bar only if the
 * block is in the post.
 *
 * @since  1.0.0
 * @return void
 */
function pwwp_cta_bar_enqueue_styles_scripts() {
	if ( has_block( 'pattonwebz/cta-bar' ) ) {
		wp_enqueue_script( 'pwwp-cta-bar-js' );
        wp_enqueue_script( 'pwwp-cta-bar-clear-block' );
		wp_enqueue_style( 'pwwp-cta-bar-css' );
	}
}
add_action( 'wp_enqueue_scripts', 'pwwp_cta_bar_enqueue_styles_scripts' );
