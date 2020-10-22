<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class CartProduct extends Pivot
{
    use HasFactory;

    protected $table = 'carts_products';

    protected $fillable = [
        'product_id',
        'amount',
        'price',
        'currency'
    ];

    protected $hidden = [
        'cart_id',
        'product_id',
    ];

    protected $primaryKey = null;
    public $incrementing = false;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function cart()
    {
        return $this->belongsTo('App\Models\Cart');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function product()
    {
        return $this->belongsTo('App\Models\Product');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function currency()
    {
        return $this->belongsTo('App\Models\Currency', 'currency', 'slug');
    }
}
