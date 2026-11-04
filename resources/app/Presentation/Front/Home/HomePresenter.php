<?php declare(strict_types=1);

namespace App\Presentation\Front\Home;

use App\Model\Blog\ArticleListFactory;
use App\Presentation\BasePresenter;
use Dibi\Exception;
use Drago\Gravatar\EmailException;
use Drago\Gravatar\SizeException;


/** @property-read HomeTemplate $template */
final class HomePresenter extends BasePresenter
{
	/** How many of the latest articles the home page shows: the newest over the whole row and two rows of three cards. */
	private const int LatestArticles = 7;


	public function __construct(
		private readonly ArticleListFactory $articleListFactory,
	) {
		parent::__construct();
	}


	/**
	 * @throws Exception
	 * @throws EmailException
	 * @throws SizeException
	 */
	public function renderDefault(): void
	{
		$this->template->list = $this->articleListFactory->create(limit: self::LatestArticles);
	}
}
