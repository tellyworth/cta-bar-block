<?php
/**
 * Plugin Name: CTA Bar
 * Description: Add CTA or alert bars to your posts and pages.
 * Author: William Patton
 * Author URI: https://www.pattonwebz.com/
 * Version: 1.0.0
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: pattonwebz-cta-bar
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
function pattonwebz_cta_bar_block_register_files_for_gutenberg() {
    $base_path  = plugin_dir_path( __FILE__ );
    $base_url   = plugin_dir_url( __FILE__ );
    $asset_info = include $base_path . 'build/index.asset.php';

    wp_register_script(
		'pattonwebz-cta-bar-js',
		$base_url . 'build/index.js',
		$asset_info['dependencies'],
		$asset_info['version'],
		false
	);

    wp_register_script(
		'pattonwebz-cta-bar-clear-block',
		$base_url . 'frontend/clearBlock.js',
		[],
		$asset_info['version'],
		false
	);

	wp_register_style(
		'pattonwebz-cta-bar-css',
		$base_url . 'css/cta-bar.css',
		[],
		$asset_info['version']
	);

	register_block_type(
		'pattonwebz/cta-bar',
		array(
			'editor_script' => 'pattonwebz-cta-bar-js',
			'editor_style'  => 'pattonwebz-cta-bar-css',
		)
	);
}
add_action( 'init', 'pattonwebz_cta_bar_block_register_files_for_gutenberg' );

/**
 * Enqueue the script and stylesheet for the pattonwebz cta bar only if the
 * block is in the post.
 *
 * @since  1.0.0
 * @return void
 */
function pattonwebz_cta_bar_block_enqueue_styles_scripts() {
    if( is_admin() ) {
        wp_enqueue_script( 'pattonwebz-cta-bar-js' );
    }
    if ( has_block( 'pattonwebz/cta-bar' ) ) {
        wp_enqueue_script( 'pattonwebz-cta-bar-clear-block' );
        wp_enqueue_style( 'pattonwebz-cta-bar-css' );
	}
}
add_action( 'wp_enqueue_scripts', 'pattonwebz_cta_bar_block_enqueue_styles_scripts' );
