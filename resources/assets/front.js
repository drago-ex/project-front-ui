// these JS + SCSS will be automatically available after installing the package
// the full Bootstrap (drago-application and drago-component import it too) registers the data attributes of all
// components, e.g. the navbar collapse; a bootstrap/js/dist/* copy beside it would register them twice
import 'bootstrap';
import { registerNajaExtensions } from './core/base.js';
import Spinner from './naja/spinner.js';
import CommentReply from './naja/comment-reply.js';

// drago-ex extensions
import { SubmitButtonDisable } from 'drago-form';
import { ToastHandler } from 'drago-application';
import { BootstrapDropdowns } from 'drago-component';
import TexyToolbar from 'drago-texy-toolbar';
import { initCopyCode } from 'drago-texy-toolbar/copy-code';

// compostrap: the theme switch (the button of a visitor, the menu of a signed-in user) and Esc for the CSS tooltips
import { ThemeSwitcher } from 'compostrap/theme-switcher';
import { CssTooltip } from 'compostrap/tooltip';

// page styles
import './front.scss';

new ThemeSwitcher({ lightIcon: 'bi bi-sun', darkIcon: 'bi bi-moon' }).initialize();
CssTooltip.init();
document.addEventListener('DOMContentLoaded', () => initCopyCode({ label: 'Copy' }));

registerNajaExtensions(
	Spinner,
	SubmitButtonDisable,
	ToastHandler,
	BootstrapDropdowns,
	TexyToolbar,
	CommentReply
);
