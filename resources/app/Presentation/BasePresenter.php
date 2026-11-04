<?php declare(strict_types=1);

namespace App\Presentation;

use App\Core\Settings\SettingsRequire;
use App\Model\Page\PageMenu;
use Drago\Localization\TranslatorAdapter;
use Drago\Permission\Authorization;
use Nette\Application\UI\Presenter;
use Nette\DI\Attributes\Inject;


/**
 * Every presenter is checked by the ACL (drago-ex/permission): its page and its signals, with the presenter name
 * as the resource, so each presenter needs its resource in the acl.neon next to it.
 * @property-read BaseTemplate $template
 */
abstract class BasePresenter extends Presenter
{
	use TranslatorAdapter;
	use Authorization;
	use SettingsRequire;

	/** Static pages of the front menu (project-static-page), cached. */
	#[Inject]
	public PageMenu $pageMenu;


	protected function beforeRender(): void
	{
		parent::beforeRender();

		// only the front layout shows the menu of static pages
		if (str_starts_with((string) $this->getName(), 'Front:')) {
			$this->template->menuPages = $this->pageMenu->getItems();
		}
	}
}
