"""Initialize API Router."""

from fastapi import APIRouter
from . import cost
from . import error

router = APIRouter(tags=["api"])
router.include_router(cost.router)
router.include_router(error.router)
