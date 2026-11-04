// these JS + SCSS will be automatically available after installing the package
// the full Bootstrap (drago-application and drago-component import it too) registers the data attributes of all
// components, e.g. the navbar collapse; a bootstrap/js/dist/* copy beside it would register them twice
import 'bootstrap';
import { registerNajaExtensions } from './core/base.js';
import Spinner from './naja/spinner.js';
import CommentReply from './naja/comment-reply.js';
import { ThemeSwitcher } from 'theme-switcher-compostrap';

// drago-ex extensions
import { SubmitButtonDisable } from 'drago-form';
import { ToastHandler } from 'drago-application';
import { BootstrapDropdowns } from 'drago-component';
import TexyToolbar from 'drago-texy-toolbar';
import { initCopyCode } from 'drago-texy-toolbar/copy-code';

// page styles
import './front.scss';

new ThemeSwitcher().initialize();
document.addEventListener('DOMContentLoaded', () => initCopyCode({ label: 'Copy' }));

registerNajaExtensions(
	Spinner,
	SubmitButtonDisable,
	ToastHandler,
	BootstrapDropdowns,
	TexyToolbar,
	CommentReply
);
