<?php declare(strict_types=1);

namespace App\Presentation\Front\Home;

use App\Model\Blog\ArticleList;
use App\Presentation\BaseTemplate;


class HomeTemplate extends BaseTemplate
{
	/** The latest published articles. */
	public ArticleList $list;
}
