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
    $base_path  = plugin_dir_path(__FILE__);
    $asset_info = include $base_path . 'build/index.asset.php';

    wp_register_script(
		'pattonwebz-cta-bar-js',
		$base_path . 'build/index.js',
		$asset_info['dependencies'],
		$asset_info['version'],
		false
	);

    wp_register_script(
		'pattonwebz-cta-bar-clear-block',
		$base_path . 'src/clearBlock.js',
		[],
		$asset_info['version'],
		false
	);

	wp_register_style(
		'pattonwebz-cta-bar-css',
		$base_path . 'css/pwwp-cta-bar.css',
		[],
		$asset_info['version'],
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
        wp_enqueue_script( 'pwwp-cta-bar-clear-block' );
        wp_enqueue_style( 'pwwp-cta-bar-css' );
	}
}
add_action( 'wp_enqueue_scripts', 'pwwp_cta_bar_enqueue_styles_scripts' );
